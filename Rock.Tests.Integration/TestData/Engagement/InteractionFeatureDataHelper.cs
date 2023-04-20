﻿// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;

namespace Rock.Tests.Integration
{
    public static partial class TestDataHelper
    {
        public static class Interactions
        {
            public class CreatePageViewInteractionActionArgs
            {
                public Guid? Guid;
                public string ForeignKey;

                public DateTime ViewDateTime;
                public string SiteIdentifier;
                public string PageIdentifier;
                public string UserAgentString;
                public string BrowserIpAddress;
                public Guid? BrowserSessionGuid;
                public string RequestUrl;
                public int? UserPersonAliasId;
            }

            public static bool DeleteInteraction( string interactionIdentifier, RockContext context )
            {
                var interactionService = new InteractionService( context );
                var interaction = interactionService.Get( interactionIdentifier );

                if ( interaction == null )
                {
                    return false;
                }

                return interactionService.Delete( interaction );
            }

            /// <summary>
            /// Create an interaction for a Page View.
            /// </summary>
            /// <param name="args"></param>
            /// <param name="rockContext"></param>
            /// <returns></returns>
            public static Interaction CreatePageViewInteraction( CreatePageViewInteractionActionArgs args, RockContext rockContext )
            {
                string deviceApplication;
                string deviceOs;
                string deviceClientType;

                TestDataHelper.Web.ParseUserAgentString( args.UserAgentString,
                    out deviceOs,
                    out deviceApplication,
                    out deviceClientType );

                var interactionService = new InteractionService( rockContext );

                // Get the Page.
                var page = PageCache.Get( args.PageIdentifier, allowIntegerIdentifier: true );
                Assert.IsNotNull( page, "Invalid page." );

                // Get the Site.
                if ( string.IsNullOrWhiteSpace( args.SiteIdentifier ) )
                {
                    args.SiteIdentifier = page.SiteId.ToString();
                }
                var site = SiteCache.Get( args.SiteIdentifier, allowIntegerIdentifier: true );
                Assert.IsNotNull( site, "Invalid site." );

                // Get the Interaction Channel.
                var dvWebsiteChannelType = DefinedValueCache.Get( SystemGuid.DefinedValue.INTERACTIONCHANNELTYPE_WEBSITE );
                var interactionChannelId = InteractionChannelCache.GetChannelIdByTypeIdAndEntityId( dvWebsiteChannelType.Id,
                    site.Id,
                    channelName: null,
                    componentEntityTypeId: null,
                    interactionEntityTypeId: null );

                // Get the Interaction Component.
                var interactionComponentId = InteractionComponentCache.GetComponentIdByChannelIdAndEntityId( interactionChannelId,
                    page.Id,
                    componentName: null );

                var interaction = interactionService.CreateInteraction( interactionComponentId,
                    page.Id,
                    operation: "View",
                    $"Browser Session {args.BrowserSessionGuid ?? Guid.NewGuid() }",
                    args.RequestUrl,
                    args.UserPersonAliasId,
                    args.ViewDateTime,
                    deviceApplication,
                    deviceOs,
                    deviceClientType,
                    deviceTypeData: "",
                    args.BrowserIpAddress ?? "127.0.0.1",
                    args.BrowserSessionGuid );

                interaction.ForeignKey = args.ForeignKey;

                return interaction;
            }
        }
    }
}
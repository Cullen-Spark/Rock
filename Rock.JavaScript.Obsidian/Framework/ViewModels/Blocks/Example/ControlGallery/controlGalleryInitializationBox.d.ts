//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
// <copyright>
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

/**
 * The box that contains all the initialization information for the
 * Obsidian Control Gallery block.
 */
export type ControlGalleryInitializationBox = {
    /**
     * Gets or sets the error message. A non-empty value indicates that
     * an error is preventing the block from being displayed.
     */
    errorMessage?: string | null;

    /** Gets or sets the navigation urls. */
    navigationUrls?: Record<string, string> | null;

    /** Gets or sets the security grant token. */
    securityGrantToken?: string | null;

    /**
     * Whether the gallery should show a toggle for showing "reflections"
     * of the controls, which are there to make 2-way binding of data more apparent.
     */
    showReflection: boolean;
};
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

import { ListItemBag } from "@Obsidian/ViewModels/Utility/listItemBag";
import { PublicAttributeBag } from "@Obsidian/ViewModels/Utility/publicAttributeBag";

export type LearningParticipantBag = {
    /**
     * Gets or sets the number of absences for this participant in this class.
     * If the Class doesn't take attendance null will be returned.
     */
    absences?: number | null;

    /** Gets or sets the label style for the students absences in the class. */
    absencesLabelStyle?: string | null;

    /** Gets or sets the attributes. */
    attributes?: Record<string, PublicAttributeBag> | null;

    /** Gets or sets the attribute values. */
    attributeValues?: Record<string, string> | null;

    /** Gets or sets the grade percent achieved for this participant. */
    currentGradePercent: number;

    /** Gets or sets the text for the currently achieved Rock.Model.LearningGradingSystemScale. */
    currentGradeText?: string | null;

    /** Gets or sets the identifier key of this entity. */
    idKey?: string | null;

    /** Gets or sets whether the particpiant is a facilitator. */
    isFacilitator: boolean;

    /** Gets or sets the (group type) role of the participant. */
    participantRole?: ListItemBag | null;

    /** Gets or sets the Rock.Model.Person representing the GroupMember. */
    personAlias?: ListItemBag | null;

    /** Gets or sets the shcedule time text for the participant detail. */
    scheduledTime?: string | null;

    /** Gets or sets the semester name for the participant detail. */
    semesterName?: string | null;
};
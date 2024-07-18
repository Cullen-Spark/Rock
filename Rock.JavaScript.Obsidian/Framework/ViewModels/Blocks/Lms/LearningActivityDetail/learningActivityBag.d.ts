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

import { AssignTo } from "@Obsidian/Enums/Lms/assignTo";
import { AvailableDateCalculationMethod } from "@Obsidian/Enums/Lms/availableDateCalculationMethod";
import { DueDateCalculationMethod } from "@Obsidian/Enums/Lms/dueDateCalculationMethod";
import { LearningActivityComponentBag } from "@Obsidian/ViewModels/Blocks/Lms/LearningActivityComponent/learningActivityComponentBag";
import { LearningActivityParticipantBag } from "@Obsidian/ViewModels/Blocks/Lms/LearningActivityComponent/learningActivityParticipantBag";
import { ListItemBag } from "@Obsidian/ViewModels/Utility/listItemBag";
import { PublicAttributeBag } from "@Obsidian/ViewModels/Utility/publicAttributeBag";

/** The item details for the Learning Activity Detail block. */
export type LearningActivityBag = {
    /** Gets or sets the learning activity component for the activity. */
    activityComponent?: LearningActivityComponentBag | null;

    /** Gets or sets the json config for the activity component before completion. */
    activityComponentSettingsJson?: string | null;

    /** The participant type assigned to complete this activity. */
    assignTo: AssignTo;

    /** Gets or sets the attributes. */
    attributes?: Record<string, PublicAttributeBag> | null;

    /** Gets or sets the attribute values. */
    attributeValues?: Record<string, string> | null;

    /** Gets or sets the calculated available date for the activity. */
    availableDateCalculated?: string | null;

    /** The calculation method used for determing the AvailableDate of the activity. */
    availableDateCalculationMethod: AvailableDateCalculationMethod;

    /**
     * Gets or sets the default date the activity
     * is available for the Rock.Model.LearningParticipant to complete.
     */
    availableDateDefault?: string | null;

    /** Gets or sets the descriptive text for the available date. */
    availableDateDescription?: string | null;

    /** The optional offset to use for calculating the AvailableDate. */
    availableDateOffset?: number | null;

    /** Gets or sets the average grade for those who've completed the activity. */
    averageGrade?: string | null;

    /** Gets or sets whether the average grade for the class is a passing grade. */
    averageGradeIsPassing: boolean;

    /** Gets or sets the average grade percent for those who've completed the activity. */
    averageGradePercent: number;

    /** Gets or sets the number of students who have completed the LearningActivity. */
    completeCount: number;

    /** Gets or sets the workflow type that's triggered when the activity is completed. */
    completionWorkflowType?: ListItemBag | null;

    /** Gets or sets the currently logged in person. */
    currentPerson?: LearningActivityParticipantBag | null;

    /** Gets or sets the description of the activity. */
    description?: string | null;

    /** Gets or sets the description of the activity as html. */
    descriptionAsHtml?: string | null;

    /** Gets or sets the calculated due date for the activity. */
    dueDateCalculated?: string | null;

    /** The calculation method used for determing the DueDate of the activity. */
    dueDateCalculationMethod: DueDateCalculationMethod;

    /** Gets or sets the default date the activity is due. */
    dueDateDefault?: string | null;

    /** Gets or sets the descriptive text for the due date. */
    dueDateDescription?: string | null;

    /** The optional offset to use for calculating the DueDate. */
    dueDateOffset?: number | null;

    /** Gets or sets the identifier key of this entity. */
    idKey?: string | null;

    /** Gets or sets the number of students who have not completed the LearningActivity. */
    incompleteCount: number;

    /** Gets or sets whether the activity's due date is in the past. */
    isPastDue: boolean;

    /** Indicates whether or not this activity allows students to comment. */
    isStudentCommentingEnabled: boolean;

    /** Gets or sets the name of the activity. */
    name?: string | null;

    /** Gets or sets the order in which the activity should be displayed. */
    order: number;

    /** Gets or sets the number of students who are assigned this activity. */
    percentComplete: number;

    /** Gets or sets the maximum number of points the activity is worth. */
    points: number;

    /** Indicates whether or not this activity sends a notification. */
    sendNotificationCommunication: boolean;

    /** Gets or sets the task binary file for the activity. */
    taskBinaryFile?: ListItemBag | null;
};
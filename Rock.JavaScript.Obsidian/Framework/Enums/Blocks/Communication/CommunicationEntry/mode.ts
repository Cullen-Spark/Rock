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

/** The mode used for the Communication Entry block. */
export const Mode = {
    /** Full mode */
    Full: 0,

    /** Simple mode */
    Simple: 1
} as const;

/** The mode used for the Communication Entry block. */
export const ModeDescription: Record<number, string> = {
    0: "Full",

    1: "Simple"
};

/** The mode used for the Communication Entry block. */
export type Mode = typeof Mode[keyof typeof Mode];
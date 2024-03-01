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
 * Provides a general mode to the number of repititions to run during
 * a benchmark.
 */
export const BenchmarkRepititionMode = {
    /** A normal run. This takes 30-60 seconds. */
    Normal: 0,

    /** A fast run, less accurate. This takes 15-30 seconds. */
    Fast: 1,

    /** An extended run, slightly more accurate. This takes 60-90 seconds. */
    Extended: 2
} as const;

/**
 * Provides a general mode to the number of repititions to run during
 * a benchmark.
 */
export const BenchmarkRepititionModeDescription: Record<number, string> = {
    0: "Normal",

    1: "Fast",

    2: "Extended"
};

/**
 * Provides a general mode to the number of repititions to run during
 * a benchmark.
 */
export type BenchmarkRepititionMode = typeof BenchmarkRepititionMode[keyof typeof BenchmarkRepititionMode];
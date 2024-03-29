/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ManualBuilderOption } from './manual-builder-option';
import { ManualOptionRule } from './manual-option-rule';

/**
 * 
 * @export
 * @interface ManualBuilder
 */
export interface ManualBuilder {
    /**
     * 
     * @type {ManualBuilderOption}
     * @memberof ManualBuilder
     */
    'builderOption'?: ManualBuilderOption;
    /**
     * 
     * @type {Array<ManualOptionRule>}
     * @memberof ManualBuilder
     */
    'rules'?: Array<ManualOptionRule> | null;
}


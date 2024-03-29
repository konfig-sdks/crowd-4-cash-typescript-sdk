/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutomaticBuilder } from './automatic-builder';
import { ManualBuilder } from './manual-builder';

/**
 * 
 * @export
 * @interface AutoInvestSettings
 */
export interface AutoInvestSettings {
    /**
     * 
     * @type {AutomaticBuilder}
     * @memberof AutoInvestSettings
     */
    'automaticBuilder'?: AutomaticBuilder;
    /**
     * 
     * @type {ManualBuilder}
     * @memberof AutoInvestSettings
     */
    'manualBuilder'?: ManualBuilder;
}


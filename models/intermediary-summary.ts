/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IntermediaryLoan } from './intermediary-loan';
import { IntermediaryPartner } from './intermediary-partner';

/**
 * A rental company like Carify which rents user and new cars
 * @export
 * @interface IntermediarySummary
 */
export interface IntermediarySummary {
    /**
     * Name of the intermediary company
     * @type {string}
     * @memberof IntermediarySummary
     */
    'intermediaryName'?: string | null;
    /**
     * Number of partners aka garages
     * @type {number}
     * @memberof IntermediarySummary
     */
    'numberOfPartners'?: number;
    /**
     * Number of loan applications
     * @type {number}
     * @memberof IntermediarySummary
     */
    'numberOfLoans'?: number;
    /**
     * A sum of all partner loans
     * @type {number}
     * @memberof IntermediarySummary
     */
    'loansTotalAmount'?: number;
    /**
     * List of your partners (garages/shops/stores)
     * @type {Array<IntermediaryPartner>}
     * @memberof IntermediarySummary
     */
    'partners'?: Array<IntermediaryPartner> | null;
    /**
     * List of your partner loan(s)
     * @type {Array<IntermediaryLoan>}
     * @memberof IntermediarySummary
     */
    'loans'?: Array<IntermediaryLoan> | null;
}

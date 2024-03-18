/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the major issues, market possition, growth of the company
 * @export
 * @interface Questionnaire
 */
export interface Questionnaire {
    /**
     * Are there any current known issues with your services or product?
     * @type {string}
     * @memberof Questionnaire
     */
    'knownIssues'?: string | null;
    /**
     * Description of known issues (if yes)
     * @type {string}
     * @memberof Questionnaire
     */
    'knownIssuesDescription'?: string | null;
    /**
     * Were there any major issues in your company connected to your services/ products (like third party liability or any bigger lawsuits)?
     * @type {string}
     * @memberof Questionnaire
     */
    'majorIssues'?: string | null;
    /**
     * Description of major issues (if yes)
     * @type {string}
     * @memberof Questionnaire
     */
    'majorIssuesDescription'?: string | null;
    /**
     * Did you undergo any financial restructuring or financial recovery (or do you plan any in the foreseeable future)?
     * @type {string}
     * @memberof Questionnaire
     */
    'financialRecovery'?: string | null;
    /**
     * Description of financial recovery (if yes)
     * @type {string}
     * @memberof Questionnaire
     */
    'financialRecoveryDescription'?: string | null;
    /**
     * How long is your current management team active in this role in the company?
     * @type {string}
     * @memberof Questionnaire
     */
    'optionTeam'?: string | null;
    /**
     * Is your company subject of an external audit?
     * @type {string}
     * @memberof Questionnaire
     */
    'optionAudit'?: string | null;
    /**
     * How much of your revenue is related to the top 3 clients?
     * @type {string}
     * @memberof Questionnaire
     */
    'optionRevenue'?: string | null;
    /**
     * What was the price trend of your services/ products in the last few years?
     * @type {string}
     * @memberof Questionnaire
     */
    'optionPrice'?: string | null;
    /**
     * What is your market estimation in the next few years?
     * @type {string}
     * @memberof Questionnaire
     */
    'marketEstimation'?: string | null;
    /**
     * What is your position in the market?
     * @type {string}
     * @memberof Questionnaire
     */
    'marketPosition'?: string | null;
    /**
     * What are the highest risks for your company in the next three years?
     * @type {string}
     * @memberof Questionnaire
     */
    'marketRisk'?: string | null;
    /**
     * What are your expectations related to revenue and net profit in the current fiscal year?
     * @type {string}
     * @memberof Questionnaire
     */
    'currentRevenue'?: string | null;
    /**
     * What are your expectations related to revenue growth in the current fiscal year?
     * @type {string}
     * @memberof Questionnaire
     */
    'revenueGrowth'?: string | null;
    /**
     * What are your expectations related to the EBITDA margin in the next three years?
     * @type {string}
     * @memberof Questionnaire
     */
    'ebitdaMargin'?: string | null;
}

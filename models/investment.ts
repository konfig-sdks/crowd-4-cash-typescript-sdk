/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccountStatement } from './account-statement';
import { AmortizationSchedule } from './amortization-schedule';
import { Bid } from './bid';
import { Company } from './company';
import { Crif } from './crif';
import { EarlyRepayment } from './early-repayment';
import { Expenses } from './expenses';
import { Financial } from './financial';
import { Income } from './income';
import { Private } from './private';
import { Questionnaire } from './questionnaire';
import { TechnicalData } from './technical-data';

/**
 * 
 * @export
 * @interface Investment
 */
export interface Investment {
    /**
     * Investment ID - auto-generated
     * @type {number}
     * @memberof Investment
     */
    'id'?: number;
    /**
     * Date when the loan application is submitted
     * @type {string}
     * @memberof Investment
     */
    'dateCreated'?: string | null;
    /**
     * Date when the loan is approved
     * @type {string}
     * @memberof Investment
     */
    'dateApproved'?: string | null;
    /**
     * Loan amount
     * @type {number}
     * @memberof Investment
     */
    'loanAmount'?: number;
    /**
     * Date of last payment received by the investor
     * @type {string}
     * @memberof Investment
     */
    'lastPaymentDate'?: string | null;
    /**
     * Interest rate of the loan
     * @type {number}
     * @memberof Investment
     */
    'interestRate'?: number;
    /**
     * Payment frequency defines how often payments will be made
     * @type {string}
     * @memberof Investment
     */
    'paymentFrequency'?: string | null;
    /**
     * Duration in months
     * @type {number}
     * @memberof Investment
     */
    'duration'?: number;
    /**
     * Type of the borrower - Private or SME
     * @type {string}
     * @memberof Investment
     */
    'borrowerType'?: string | null;
    /**
     * Type of the loan - Private or SME
     * @type {string}
     * @memberof Investment
     */
    'biddingType'?: string | null;
    /**
     * Loan type - POS loan, Private and SME
     * @type {string}
     * @memberof Investment
     */
    'loanType'?: string | null;
    /**
     * Purpose of the loan
     * @type {string}
     * @memberof Investment
     */
    'loanPurpose'?: string | null;
    /**
     * Rating of the loan - AA, A, B, C, D
     * @type {string}
     * @memberof Investment
     */
    'loanRating'?: string | null;
    /**
     * Status of the loan
     * @type {string}
     * @memberof Investment
     */
    'loanStatus'?: string | null;
    /**
     * Payment status - performing, late 1 to 15 days, Defaulted
     * @type {string}
     * @memberof Investment
     */
    'performanceStatus'?: string | null;
    /**
     * Number od days late
     * @type {number}
     * @memberof Investment
     */
    'daysLate'?: number;
    /**
     * Is loan collaterialized? - Yes, No
     * @type {string}
     * @memberof Investment
     */
    'collateral'?: string | null;
    /**
     * Collater Type - Real estate, Vehicle, Guarantor, Stock
     * @type {string}
     * @memberof Investment
     */
    'collateralType'?: string | null;
    /**
     * Is loan insured? - Yes, No
     * @type {string}
     * @memberof Investment
     */
    'insurance'?: string | null;
    /**
     * Unpaid Principal
     * @type {number}
     * @memberof Investment
     */
    'totalPrincipalRemaining'?: number;
    /**
     * Currently paid principal
     * @type {number}
     * @memberof Investment
     */
    'totalRepaidPrincipal'?: number;
    /**
     * Currently paid interest
     * @type {number}
     * @memberof Investment
     */
    'totalRepaidInterest'?: number;
    /**
     * End date of the project
     * @type {string}
     * @memberof Investment
     */
    'biddingEnd'?: string | null;
    /**
     * Date when the bid is placed
     * @type {string}
     * @memberof Investment
     */
    'investmentDate'?: string;
    /**
     * Date when the bid is paid by the investor
     * @type {string}
     * @memberof Investment
     */
    'purchaseDate'?: string | null;
    /**
     * Date when the loan is paid to borrower
     * @type {string}
     * @memberof Investment
     */
    'disbursementDate'?: string;
    /**
     * Date of the last instalment
     * @type {string}
     * @memberof Investment
     */
    'maturityDate'?: string;
    /**
     * Share of outstanding Principal held by Fund
     * @type {number}
     * @memberof Investment
     */
    'share'?: number;
    /**
     * Value Factor
     * @type {number}
     * @memberof Investment
     */
    'vFac'?: number;
    /**
     * Current Principal Balance according to Vfac
     * @type {number}
     * @memberof Investment
     */
    'loanPosition'?: number;
    /**
     * Auto Invest Id. It can be null if auto invest is turned off
     * @type {number}
     * @memberof Investment
     */
    'autoInvestId'?: number | null;
    /**
     * Description of the loan purpose
     * @type {string}
     * @memberof Investment
     */
    'notes'?: string | null;
    /**
     * Web page where loan is desplayed in UI
     * @type {string}
     * @memberof Investment
     */
    'link'?: string | null;
    /**
     * 
     * @type {Bid}
     * @memberof Investment
     */
    'bid'?: Bid;
    /**
     * 
     * @type {Private}
     * @memberof Investment
     */
    'borrowerPrivate'?: Private;
    /**
     * 
     * @type {Company}
     * @memberof Investment
     */
    'borrowerCompany'?: Company;
    /**
     * 
     * @type {Income}
     * @memberof Investment
     */
    'income'?: Income;
    /**
     * 
     * @type {Expenses}
     * @memberof Investment
     */
    'expense'?: Expenses;
    /**
     * 
     * @type {Crif}
     * @memberof Investment
     */
    'crif'?: Crif;
    /**
     * 
     * @type {Questionnaire}
     * @memberof Investment
     */
    'questionnaire'?: Questionnaire;
    /**
     * 
     * @type {Financial}
     * @memberof Investment
     */
    'financial'?: Financial;
    /**
     * 
     * @type {AmortizationSchedule}
     * @memberof Investment
     */
    'amortizationSchedule'?: AmortizationSchedule;
    /**
     * 
     * @type {EarlyRepayment}
     * @memberof Investment
     */
    'earlyRepayment'?: EarlyRepayment;
    /**
     * 
     * @type {AccountStatement}
     * @memberof Investment
     */
    'accountStatement'?: AccountStatement;
    /**
     * 
     * @type {TechnicalData}
     * @memberof Investment
     */
    'technicalData'?: TechnicalData;
}


/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A loan that was made on behalf of your partner
 * @export
 * @interface RentalLoan
 */
export interface RentalLoan {
    /**
     * Loan Id
     * @type {number}
     * @memberof RentalLoan
     */
    'loanId'?: number;
    /**
     * Rentee Id
     * @type {number}
     * @memberof RentalLoan
     */
    'renteeId'?: number;
    /**
     * First name of the rentee
     * @type {string}
     * @memberof RentalLoan
     */
    'firstName'?: string | null;
    /**
     * Last name of the rentee
     * @type {string}
     * @memberof RentalLoan
     */
    'lastName'?: string | null;
    /**
     * Date of applicaton
     * @type {string}
     * @memberof RentalLoan
     */
    'dateCreated'?: string | null;
    /**
     * Date of approval
     * @type {string}
     * @memberof RentalLoan
     */
    'dateApproved'?: string | null;
    /**
     * Loan amount total
     * @type {number}
     * @memberof RentalLoan
     */
    'loanAmount'?: number;
    /**
     * Interest rate of the loan
     * @type {number}
     * @memberof RentalLoan
     */
    'interestRate'?: number;
    /**
     * Duration in months
     * @type {number}
     * @memberof RentalLoan
     */
    'duration'?: number;
    /**
     * Rating of the loan - AA, A, B, C, D
     * @type {string}
     * @memberof RentalLoan
     */
    'loanRating'?: string | null;
    /**
     * Status of the loan
     * @type {string}
     * @memberof RentalLoan
     */
    'loanStatus'?: string | null;
    /**
     * Date of last payment received by the investor
     * @type {string}
     * @memberof RentalLoan
     */
    'lastPaymentDate'?: string | null;
    /**
     * Payment status - performing, late 1 to 15 days, Defaulted
     * @type {string}
     * @memberof RentalLoan
     */
    'performanceStatus'?: string | null;
    /**
     * Number od days late
     * @type {number}
     * @memberof RentalLoan
     */
    'daysLate'?: number;
    /**
     * Is loan collaterialized? - Yes, No
     * @type {string}
     * @memberof RentalLoan
     */
    'collateral'?: string | null;
    /**
     * Collater Type - Real estate, Vehicle, Guarantor, Stock
     * @type {string}
     * @memberof RentalLoan
     */
    'collateralType'?: string | null;
    /**
     * Is loan insured? - Yes, No
     * @type {string}
     * @memberof RentalLoan
     */
    'insurance'?: string | null;
    /**
     * Unpaid Principal
     * @type {number}
     * @memberof RentalLoan
     */
    'totalPrincipalRemaining'?: number;
    /**
     * Number of annuities that have been not paid yet.
     * @type {number}
     * @memberof RentalLoan
     */
    'numberOfUnpaidAnnuities'?: number;
    /**
     * Currently paid principal
     * @type {number}
     * @memberof RentalLoan
     */
    'totalRepaidPrincipal'?: number;
    /**
     * Currently paid interest
     * @type {number}
     * @memberof RentalLoan
     */
    'totalRepaidInterest'?: number;
    /**
     * Date when the loan is paid to borrower
     * @type {string}
     * @memberof RentalLoan
     */
    'disbursementDate'?: string | null;
    /**
     * Date of the last instalment
     * @type {string}
     * @memberof RentalLoan
     */
    'maturityDate'?: string | null;
    /**
     * Description of the loan purpose
     * @type {string}
     * @memberof RentalLoan
     */
    'notes'?: string | null;
    /**
     * Web page where loan is desplayed in UI
     * @type {string}
     * @memberof RentalLoan
     */
    'link'?: string | null;
}


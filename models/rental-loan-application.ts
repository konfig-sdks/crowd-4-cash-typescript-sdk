/*
C4C REST API

Access to the Crowd4Cash Crowdlending Platform through an API

The version of the OpenAPI document: 2.0.0
Contact: info@crowd4cash.ch

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A loan application that is submitted by the rental on behalf of their rentee(s)
 * @export
 * @interface RentalLoanApplication
 */
export interface RentalLoanApplication {
    /**
     * Name or E-mail of the user who makes the API call
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'apiRequester'?: string | null;
    /**
     * Rentee gender acronym. M stands for male and F for female.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeGender': string;
    /**
     * First name of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeFirstName': string;
    /**
     * Last name of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeLastName': string;
    /**
     * Birthdate of the rentee. Expected format: dd.MM.yyyy
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeBirthdate'?: string | null;
    /**
     * E-mail address of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeEmail': string;
    /**
     * Rentee mobile phone number - the last 8 digits only
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeMobilePhoneNumber': string;
    /**
     * Street address of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeStreetAddress'?: string | null;
    /**
     * House number of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeHouseNumber'?: string | null;
    /**
     * Zip code of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeZipCode'?: string | null;
    /**
     * City of the rentee
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'renteeCity'?: string | null;
    /**
     * Description of the item you buy
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'purchaseItem': string;
    /**
     * Status of the item
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemStatus'?: string | null;
    /**
     * Name of the item
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemName': string;
    /**
     * Type of the item e.g. Electric Scooter, E-Motorcycle etc.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemType'?: string | null;
    /**
     * Brand of the item
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemBrand'?: string | null;
    /**
     * Model of the item
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemModel'?: string | null;
    /**
     * Color of the item
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'itemColor'?: string | null;
    /**
     * Market value of the item that is rented.
     * @type {number}
     * @memberof RentalLoanApplication
     */
    'itemMarketValue': number;
    /**
     * Serial number (aka VIN or Chassis No.)
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'serialNumber'?: string | null;
    /**
     * Identification number (aka Stammnummer)
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'identificationNumber'?: string | null;
    /**
     * Rental amount per month
     * @type {number}
     * @memberof RentalLoanApplication
     */
    'rentalAmount': number;
    /**
     * The first date of the rental period. Expected format: dd.MM.yyyy
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'rentDate'?: string | null;
    /**
     * Front Side of the Identity Document (National ID, Passport or Permit). Please notice that you must first convert it to Base64 and then send to our API.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'idFrontPhoto': string;
    /**
     * Front Side file extension.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'idFrontExtension': string;
    /**
     * Back Side of the Identity Document (National ID, Passport or Permit). Please notice that you must first convert it to Base64 and then send to our API.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'idBackPhoto': string;
    /**
     * Back Side file extension.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'idBackExtension': string;
    /**
     * Selfie of the Rentee. Please notice that you must first convert it to Base64 and then send to our API.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'selfiePhoto': string;
    /**
     * Selfie file extension.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'selfieExtension': string;
    /**
     * Copy of the Contract. Please notice that you must first convert it to Base64 and then send to our API.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'contractFile': string;
    /**
     * Contract file extension.
     * @type {string}
     * @memberof RentalLoanApplication
     */
    'contractFileExtension': string;
}

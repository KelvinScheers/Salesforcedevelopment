public with sharing class AccountTools {
    public static List<Account> AllActiveAccounts(); {

                [SELECT Name,BillingAddress,Level_of_Education__c, Quantity_Students__C
            FROM Account
                    WHERE Quantity_Students__c > 1];

                }

            List<Account> accounts = AccountTools.getAllActiveAccounts();

public with sharing class AccountTools {
    public static List<Account> getAllActiveAccounts(); {

               return [SELECT Name,BillingAddress,Level_of_Education__c, Quantity_Students__c
            FROM Account
                    WHERE Quantity_Students__c > 1];

                }
            }

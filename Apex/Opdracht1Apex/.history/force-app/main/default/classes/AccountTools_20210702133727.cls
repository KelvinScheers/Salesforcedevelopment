public with sharing class AccountTools {
    public AccountTools() {


            public static List<Account> get AllactiveAccounts(){
                return[SELECT Name,BillingAddress,Level_of_Education__c, Quantity_Students__C
            FROM Account
                    WHERE Quantity_Students__c > 1];
                    }
                }

            List<Account> accounts = AccountTools.getAllActiveAccounts();

            system.debug(accounts);

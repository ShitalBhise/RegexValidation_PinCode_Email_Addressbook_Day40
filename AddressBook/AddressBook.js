console.log("Good Morning!");
console.log("Today we shall work on Address Book System using Node JS.");   

/**
 * UC 1: Create an address book contact with first name,last name,address, city,state,zip , phone number and email id 
 * 
 * @return: A map containing above contact details
 * 
 * @param: first_name,last name,address, city,state,zip , phone num and emailId
 */
 function createContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    // Creates a  new empty map
    const contact = new Map();

    // Put the above details into the map
    contact.set("first_name", first_name);
    contact.set("last_name", last_name);
    contact.set("address", address);
    contact.set("city", city);
    contact.set("state", state);
    contact.set("zip", zip);
    contact.set("phone_no", phone_no);
    contact.set("email_id", email_id);

    // Returns a map containing above details
    return contact;
}


/**
 * UC 3: Create a new address book array and add new contacts to it 
 * 
 * @return: An array (addressbook) containing contacts
 * 
 * @param: arbitrary number of contacts
 */
 function createAddressBook(contact1,contact2){
    // Create a new addressbook of type array
    const addressBook = new Array();
    for (let i=0;i<arguments.length;i++){
        addressBook.push(arguments[i]);
    }

    // Returns an array containing above contacts
    return addressBook;
}

/**
 * UC 4 : Find existing contact person using their name and edit it
 * 
 * @return: An array (addressbook after modification) containing contacts
 * 
 * @param: addressbook, first and last name of contact to be edited, contact details to replace
 */
 function editExistingContact(addressbook, first_name,last_name, contact){
    let range = addressbook.length;

    // Loop through the contacts inside the address book
    for(let i=0;i<range;i++){
        
        // Match for the contact using first and last name
        if((addressbook[i].get("first_name") === first_name) &&(addressbook[i].get("last_name") === last_name)){
            // edit the contact details
            addressbook[i].set("first_name",contact.get("first_name"));
            addressbook[i].set("last_name",contact.get("last_name"));
            addressbook[i].set("address",contact.get("address"));
            addressbook[i].set("city",contact.get("city"));
            addressbook[i].set("state",contact.get("state"));
            addressbook[i].set("zip",contact.get("zip"));
            addressbook[i].set("phone_no",contact.get("phone_no"));
            addressbook[i].set("email_id",contact.get("email_id"));
        }
    }

    // Returns an array containing above contacts
    return addressbook;
}

let contact_new = createValidatedContact("Shish","Pachpor","Nagar","Bengaluru","Karnataka",457838,9988776655,"SP@gmail.com");


/**
 * UC 5 : Find a person with name and delete it from array
 * 
 * @return: An array (addressbook after modification) containing contacts
 * 
 * @param: addressbook, first and last name of contact to be deleted
 */
 function deleteExistingContact(addressbook, first_name,last_name){
    let range = addressbook.length;

    // Loop through the contacts inside the address book
    for(let i=0;i<range;i++){
        
        // Match for the contact using first and last name
        if((addressbook[i].get("first_name") === first_name) && (addressbook[i].get("last_name") === last_name)){
            // delete the contact details
            delete addressbook[i];
        }
    }

    // Returns an array after deletion of above contact
    return addressbook;
}
let contact3 = createValidatedContact("Shish","Pachpor","Nagar","Bengaluru","Karnataka",457838,9988776655,"SP@gmail.com");
let contact4 = createValidatedContact("Anjali","rana","nagar street","nagpur","maharastra",458538,9801234567,"rana@gmail.com");
// create an addressbook containing above contacts
let addressBook = createAddressBook(contact3,contact4);
// Delete the existing contact based on name
let first_name = "Shish";
let last_name = "Pachpor";


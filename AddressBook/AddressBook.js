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

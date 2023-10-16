export class Supplier 
{
    id: any; 
    name: string; 
    contactPerson: string; 
    email: string; 
    phone: any; 
    location:string;
  
    constructor(id: number, name: string, contactPerson: string, email: string, phone: string, location:string)
     {
      this.id = id;
      this.name = name;
      this.contactPerson = contactPerson;
      this.email = email;
      this.phone = phone;
      this.location = location;
    }
  }
  
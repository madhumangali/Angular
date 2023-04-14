
export class User{

    private firstName: string = '';
    private lastName: string = '';
    private email:string='';
    private password:string='';
    private country:string='';
    private gender:string='';
    private terms:boolean=false;
    private newsLetter: boolean=false;
    
    /**
     * Getter $firstName
     * @return {string }
     */
	public get $firstName(): string  {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string }
     */
	public get $lastName(): string  {
		return this.lastName;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Setter $firstName
     * @param {string } value
     */
	public set $firstName(value: string ) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string } value
     */
	public set $lastName(value: string ) {
		this.lastName = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}
  
    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Getter $terms
     * @return {boolean}
     */
	public get $terms(): boolean {
		return this.terms;
	}

    /**
     * Getter $newsLetter
     * @return {boolean}
     */
	public get $newsLetter(): boolean {
		return this.newsLetter;
	}

  

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}

    /**
     * Setter $terms
     * @param {boolean} value
     */
	public set $terms(value: boolean) {
		this.terms = value;
	}

    /**
     * Setter $newsLetter
     * @param {boolean} value
     */
	public set $newsLetter(value: boolean) {
		this.newsLetter = value;
	}


}
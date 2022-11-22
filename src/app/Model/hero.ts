

export class Hero {
  id: number;
  name: string;
  imageUrl: string;
  route: string;
  description: string;


  constructor(id: number, name: string, imageUrl: string, route: string, description: string) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
    this.route = route
    this.description = description
  }
}


export class Hero {
  id: number;
  name: string;
  imageUrl: string;
  bigImageUrl: string;
  description: string;


  constructor(id: number, name: string, imageUrl: string, bigImageUrl: string, description: string) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
    this.bigImageUrl = bigImageUrl
    this.description = description
  }
}


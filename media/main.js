class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(ratings){
    let sum_ratings = 0;
    for(let i =0; i<this._ratings.length; i++){
      sum_ratings += this._ratings[i];
    }
    var average_ratings = sum_ratings/ this._ratings.length
    return average_ratings;
  }

  toggleCheckOutStatus(){
    console.log("toggling")
    this._isCheckedOut = !this._isCheckedOut; 
  }

  addRating(rating){
    // var rating = ratings();
    this._ratings.push(rating)

  }

};

class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
};

class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    this._runTime;
  }
};

class CD extends Media{
  constructor(artist,title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }
};


let historyOfEverything = new Book("Bill","A short", 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating());


let speed = new Movie("Jan de Bont","Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())

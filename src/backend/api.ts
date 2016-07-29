// Our API for demos only
import {fakeDataBase} from './db';
import {fakeDemoRedisCache} from './cache';

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example

// Our API for demos only

export function getOptions(req, res) {
  
    getOptionData()
      .then(data => res.json(data));
}

export function castVote(req, res){
    getOptionData()
      .then(incrementVoteForOption.bind(this, req.params.beerId))
      .then(beer => res.json(beer));
}

function getOptionData() {
  let key = 'theOptions';
  let cache = fakeDemoRedisCache.get(key);
  var result;
  if (cache !== undefined) {
    console.log('getOptions Cache Hit');
    return Promise.resolve(cache);
  }
  console.log('getOptions Cache Miss');

  return fakeDataBase.get()
    .then(data => {
      fakeDemoRedisCache.set(key, data);
      return data;
    })
}

function incrementVoteForOption(id, data: Array<any>){
  var beer = data.find(b => b.id === id);
  beer.voteCount = (beer.voteCount || 0) + 1;
  return beer;
}
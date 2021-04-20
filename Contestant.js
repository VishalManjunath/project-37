class Contestant {
    constructor(){
      this.name = null;
      this.index = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
      });
    }
  
    static getContestantInfo(){
      var contestantInfo = database.ref('contestants');
      contestantInfo.on("value",function(data){
        allContestants = data.val();
      })
    }
  }
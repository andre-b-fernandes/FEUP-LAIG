class ComboAnimation extends Animation{
  constructor(scene, velocity, animations){
    super(scene, velocity);
    this.animations = animations;
    this.index = 0;
  }

  checkStatus(){
    if(!this.animations[this.index].moving){
      this.index++;
      if(this.index == this.animations.length){
        this.moving = false;
      }
    }
  }

  update(currentTime){
    console.log(this.index);
    if(this.moving){
        this.animations[this.index].update(currentTime);
        this.transformMatrix = this.animations[this.index].transformMatrix;
        this.checkStatus();
    }
    else{
      this.animations[this.index].update(currentTime);
      this.transformMatrix = this.animations[this.index].transformMatrix;
    }

  }
}

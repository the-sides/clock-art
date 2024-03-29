// This is just a random sippet
https://github.com/pixijs/pixijs/issues/1333#issuecomment-424324927

PIXI.Graphics.prototype.drawDashLine = function(toX, toY, dash = 16, gap = 8) {
    const lastPosition = this.currentPath.shape.points;
  
    const currentPosition = {
      x: lastPosition[lastPosition.length - 2] || 0,
      y: lastPosition[lastPosition.length - 1] || 0
    };
  
    const absValues = {
      toX: Math.abs(toX),
      toY: Math.abs(toY)
    };
  
    for (
      ;
      Math.abs(currentPosition.x) < absValues.toX ||
      Math.abs(currentPosition.y) < absValues.toY;
    ) {
      currentPosition.x =
        Math.abs(currentPosition.x + dash) < absValues.toX
          ? currentPosition.x + dash
          : toX;
      currentPosition.y =
        Math.abs(currentPosition.y + dash) < absValues.toY
          ? currentPosition.y + dash
          : toY;
  
      this.lineTo(currentPosition.x, currentPosition.y);
  
      currentPosition.x =
        Math.abs(currentPosition.x + gap) < absValues.toX
          ? currentPosition.x + gap
          : toX;
      currentPosition.y =
        Math.abs(currentPosition.y + gap) < absValues.toY
          ? currentPosition.y + gap
          : toY;
  
      this.moveTo(currentPosition.x, currentPosition.y);
    }
  };
/** @namespace */
var matx = matx || {};


msilver = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x555555, specular: 0x666666, shininess: 10 });
this.mgold = new THREE.MeshPhongMaterial( { ambient: 0x993300, color: 0x111111, specular: 0xffaa00, shininess: 10 } );
this.mbro = new THREE.MeshPhongMaterial( { ambient: 0x993300, color: 0xff6600, specular: 0x990000, shininess: 50 } );
this.mred = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0x030303, specular: 0x990000, shininess: 50 } );
this.mtest = new THREE.MeshNormalMaterial( { color: 0x00f000 } );

this.mheart = new THREE.MeshLambertMaterial({
          map: THREE.ImageUtils.loadTexture('smile.png')
 });

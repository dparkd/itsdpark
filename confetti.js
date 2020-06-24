// Having some fun with confetti
/**
 * Original library => dom-confetti
 * https://github.com/daniel-lundin/dom-confetti
 */

var defaultColors=['#a17fb9','#5ec2de','#ef3e4c','#54c26f','#efac1f'],shape=function(t){var e=[function(t){var e=Math.round(10*(Math.random()+.5))+"px";return t.style.width=e,t.style.height=e,t},function(t){var e=Math.round(10*(Math.random()+.5))+"px";return t.style.width=e,t.style.height=e,t.style["border-radius"]="50%",t},function(t){var e=""+Math.round(10*(Math.random()+.5)),n=t.style["background-color"];return t.style["background-color"]="transparent",t.style["border-bottom"]=e+"px solid "+n,t.style["border-left"]=e/2+"px solid transparent",t.style["border-right"]=e/2+"px solid transparent",t.style.height=0,t.style.width=e,t}];return e[Math.floor(Math.random()*e.length)](t)};function createElements(t,e,n){return Array.from({length:e}).map(function(e,a){var r=document.createElement("div"),o=n[a%n.length];return r.style["background-color"]=o,r.style.position="absolute",t.appendChild(shape(r)),r})}function randomPhysics(t,e,n,a){var r=t*(Math.PI/180),o=e*(Math.PI/180);return{x:0,y:0,wobble:10*a(),velocity:.5*n+a()*n,angle2D:-r+(.5*o-a()*o),angle3D:-Math.PI/4+a()*(Math.PI/2),tiltAngle:a()*Math.PI}}function updateFetti(t,e,n){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=.1,t.physics.velocity*=n,t.physics.y+=3,t.physics.tiltAngle+=.1;var a=t.physics,r=a.x,o=a.y,i=a.tiltAngle,s=a.wobble,l="translate3d("+(r+10*Math.cos(s))+"px, "+(o+10*Math.sin(s))+"px, 0) rotate3d(1, 1, 1, "+i+"rad)";t.element.style.transform=l,t.element.style.opacity=1-e}function animate(t,e,n){var a=200,r=0;requestAnimationFrame(function o(){e.forEach(function(t){return updateFetti(t,r/a,n)}),(r+=1)<a?requestAnimationFrame(o):e.forEach(function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})})}window.confetti=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.angle,a=void 0===n?90:n,r=e.decay,o=void 0===r?.9:r,i=e.spread,s=void 0===i?45:i,l=e.startVelocity,c=void 0===l?45:l,h=e.elementCount,d=void 0===h?50:h,y=e.colors,u=void 0===y?defaultColors:y,p=e.random,f=void 0===p?Math.random:p;animate(t,createElements(t,d,u).map(function(t){return{element:t,physics:randomPhysics(a,s,c,f)}}),o)};

function throwConfetti(e) {
        // Burst of celebratory confetti!
        window.confetti(
          document.getElementById('confetti'),
          { angle: 90, spread: 280, startVelocity: 40, elementCount: 40, decay: 0.7 }
        );
      }

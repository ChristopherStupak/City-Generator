// --- Noise.js Library (Embedded) ---
(function(e){"use strict";var t=e.Noise=function(e){e==null&&(e=Math.random());var t=new Array(512),n=new Array(512),r=new Array(512);this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];this.p=new Uint8Array(256);this.perm=new Uint8Array(512);this.gradP=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];var i=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(var s=0;s<256;s++)this.p[s]=i[s];for(s=0;s<512;s++)this.perm[s]=this.p[s&255]};t.prototype.seed=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);var t=new Uint8Array(256);for(var n=0;n<256;n++){var r=n&1?this.p[n]^e&255:this.p[n]^e>>8&255;t[n]=r}this.p=t;for(var n=0;n<512;n++)this.perm[n]=this.p[n&255]};t.prototype.simplex2=function(e,t){var n=Math.floor((e+t)*.3660254037844386),r=(e+t-n)*.21132486540518713,i=e-r,s=t-r,o=0,u=0;n&1?(o=1,u=0):(o=0,u=1);var a=i-o+.21132486540518713,f=s-u+.21132486540518713,l=i-1+.42264973081037427,c=s-1+.42264973081037427,h=n&255,p=h+this.perm[h]&255,d=p+this.perm[p]&255,v=h+1&255,m=v+this.perm[v]&255,g=m+this.perm[m]&255,y=h+o&255,b=y+this.perm[y]&255,w=b+this.perm[b]&255,E=h+1&255,S=E+this.perm[E]&255,x=S+this.perm[S]&255,T=h+o&255,N=T+this.perm[T]&255,C=N+this.perm[C]&255,k=h+u&255,L=k+this.perm[k]&255,A=L+this.perm[L]&255,O=h+1&255,M=O+this.perm[O]&255,_=M+this.perm[M]&255,D=h+u&255,P=D+this.perm[D]&255,H=P+this.perm[P]&255,B=i>s?h+1&255:h+u&255,j=B+this.perm[B]&255,F=j+this.perm[j]&255,I=0,q=0,R=0,U=0;I=.5-i*i-s*s;if(I>0){var z=this.gradP[this.perm[h]%12];I=I*I*I*I*(z[0]*i+z[1]*s)}q=.5-a*a-f*f;if(q>0){var W=this.gradP[this.perm[y]%12];q=q*q*q*q*(W[0]*a+W[1]*f)}R=.5-l*l-c*c;if(R>0){var X=this.gradP[this.perm[B]%12];R=R*R*R*R*(X[0]*l+X[1]*c)}return 70*(I+q+R)};t.prototype.simplex3=function(e,t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v=Math.floor((e+t+n)*(1/3)),m=e-v,g=t-v,y=n-v,b=(m+g+y)*1/6,w=m-b,E=g-b,S=y-b;w>=E&&w>=S?(f=1,l=0,c=0):(E>=w&&E>=S?(f=0,l=1,c=0):(f=0,l=0,c=1));var x=w-f+1/6,T=E-l+1/6,N=S-c+1/6,C=w-1+3/6,k=E-1+3/6,L=S-1+3/6;v&=255;var A=this.perm[v]&255,O=this.perm[A+f]&255,M=this.perm[A+l]&255,_=this.perm[A+c]&255,D=this.perm[A+1]&255,P=this.perm[D+f]&255,H=this.perm[D+l]&255,B=this.perm[D+c]&255;r=.6-w*w-E*E-S*S;if(r<0)h=0;else{var j=this.grad3[this.perm[v]%12];r=r*r*r*r,h=r*(j[0]*w+j[1]*E+j[2]*S)}i=.6-x*x-T*T-N*N;if(i<0)p=0;else{var F=this.grad3[this.perm[O]%12];i=i*i*i*i,p=i*(F[0]*x+F[1]*T+F[2]*N)}s=.6-C*C-k*k-L*L;if(s<0)d=0;else{var I=this.grad3[this.perm[D]%12];s=s*s*s*s,d=s*(I[0]*C+I[1]*k+I[2]*L)}return 32*(h+p+d)};t.prototype.perlin2=function(e,t){var n=Math.floor(e),r=Math.floor(t);e-=n,t-=r,n&=255,r&=255;var i=this.perm[n]+r,s=this.perm[n+1]+r,o=this.perm[i],u=this.perm[s],a=this.perm[i+1],f=this.perm[s+1],l=e*e*e*(e*(e*6-15)+10),c=t*t*t*(t*(t*6-15)+10),h=this.grad2(o,e,t),p=this.grad2(u,e-1,t),d=this.grad2(a,e,t-1),v=this.grad2(f,e-1,t-1),m=h+l*(p-h),g=d+l*(v-d);return(m+c*(g-m))*.395};t.prototype.perlin3=function(e,t,n){var r=Math.floor(e),i=Math.floor(t),s=Math.floor(n);e-=r,t-=i,n-=s,r&=255,i&=255,s&=255;var o=this.perm[r]+i,u=this.perm[r+1]+i,a=this.perm[o]+s,f=this.perm[u]+s,l=this.perm[o+1]+s,c=this.perm[u+1]+s,h=e*e*e*(e*(e*6-15)+10),p=t*t*t*(t*(t*6-15)+10),d=n*n*n*(n*(n*6-15)+10),v=this.grad(a,e,t,n),m=this.grad(f,e-1,t,n),g=this.grad(l,e,t-1,n),y=this.grad(c,e-1,t-1,n),b=this.grad(a+1,e,t,n-1),w=this.grad(f+1,e-1,t,n-1),E=this.grad(l+1,e,t-1,n-1),S=this.grad(c+1,e-1,t-1,n-1),x=v+h*(m-v),T=g+h*(y-g),N=b+h*(w-b),C=E+h*(S-E),k=x+p*(T-x),L=N+p*(C-N);return k+d*(L-k)};t.prototype.grad=function(e,t,n,r){e&=15;var i=this.grad3[e];return i[0]*t+i[1]*n+i[2]*r};t.prototype.grad2=function(e,t,n){e&=7;var r=this.gradP[e];return r[0]*t+r[1]*n}})(this);

window.onload = () => {
    // --- DOM Elements ---
    const seedInput = document.getElementById('seed');
    const gridSizeInput = document.getElementById('gridSize');
    // Island
    const islandScaleInput = document.getElementById('islandScale');
    const islandOffsetXInput = document.getElementById('islandOffsetX');
    const islandOffsetYInput = document.getElementById('islandOffsetY');
    const waterThresholdInput = document.getElementById('waterThreshold');
    // Park
    const parkScaleInput = document.getElementById('parkScale');
    const parkOffsetXInput = document.getElementById('parkOffsetX');
    const parkOffsetYInput = document.getElementById('parkOffsetY');
    const parkThresholdInput = document.getElementById('parkThreshold');
    // Road
    const roadScaleInput = document.getElementById('roadScale');
    const roadOffsetXInput = document.getElementById('roadOffsetX');
    const roadOffsetYInput = document.getElementById('roadOffsetY');
    const roadSpacingInput = document.getElementById('roadSpacing');
    const roadWobbleInput = document.getElementById('roadWobble');
    // General UI
    const generateButton = document.getElementById('generate');
    const cityGrid = document.getElementById('cityGrid');
    const jsonOutput = document.getElementById('jsonOutput');
    // Value Displays
    const waterValueSpan = document.getElementById('waterValue');
    const parkValueSpan = document.getElementById('parkValue');
    const roadWobbleValueSpan = document.getElementById('roadWobbleValue');
    // Export Buttons
    const copyJsonButton = document.getElementById('copyJson');
    const downloadJsonButton = document.getElementById('downloadJson');
    const downloadXmlButton = document.getElementById('downloadXml');

    let cityData = null; // To store the latest generated city object

    // --- Utility Functions ---
    function simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    
    // --- Noise Factory ---
    // Creates and seeds noise objects to ensure the main seed affects all layers.
    const NoiseFactory = {
        create: (baseSeed, layerId) => {
            const noise = new Noise();
            noise.seed(baseSeed + layerId);
            return noise;
        }
    };

    // --- Main Generator Logic ---
    function generateCity() {
        // Get current values from controls
        const seedString = seedInput.value;
        const seed = simpleHash(seedString);
        const gridSize = parseInt(gridSizeInput.value);
        
        // Layer controls
        const islandScale = parseFloat(islandScaleInput.value);
        const islandOffsetX = parseFloat(islandOffsetXInput.value);
        const islandOffsetY = parseFloat(islandOffsetYInput.value);
        const waterThreshold = parseFloat(waterThresholdInput.value);

        const parkScale = parseFloat(parkScaleInput.value);
        const parkOffsetX = parseFloat(parkOffsetXInput.value);
        const parkOffsetY = parseFloat(parkOffsetYInput.value);
        const parkThreshold = parseFloat(parkThresholdInput.value);
        
        const roadScale = parseFloat(roadScaleInput.value);
        const roadOffsetX = parseFloat(roadOffsetXInput.value);
        const roadOffsetY = parseFloat(roadOffsetYInput.value);
        const roadSpacing = parseInt(roadSpacingInput.value);
        const roadWobble = parseInt(roadWobbleInput.value);

        // Initialize and SEED noise generators for each layer using the factory
        const islandNoise = NoiseFactory.create(seed, 0);
        const parkNoise = NoiseFactory.create(seed, 1);
        const roadNoise = NoiseFactory.create(seed, 2);

        // Use a 2D array to make modifying the grid easier
        const grid = [];

        // --- Layer 1 & 2: Island and Park Generation ---
        for (let y = 0; y < gridSize; y++) {
            grid[y] = [];
            for (let x = 0; x < gridSize; x++) {
                const dx = x / gridSize - 0.5;
                const dy = y / gridSize - 0.5;
                const distSq = dx * dx + dy * dy; 
                const islandNoiseValue = (islandNoise.perlin2((x + islandOffsetX) * islandScale, (y + islandOffsetY) * islandScale) + 1) / 2;
                const finalIslandValue = islandNoiseValue - (2 * distSq);

                let tileType;
                if (finalIslandValue < waterThreshold) {
                    tileType = 'water';
                } else {
                    tileType = 'building';
                    const parkNoiseValue = (parkNoise.perlin2((x + parkOffsetX) * parkScale, (y + parkOffsetY) * parkScale) + 1) / 2;
                    if (parkNoiseValue > parkThreshold) {
                        tileType = 'park';
                    }
                }
                grid[y][x] = tileType;
            }
        }

        // --- Layer 4: Seawall Generation ---
        const seawallCoords = [];
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                if (grid[y][x] === 'water') continue;
                const neighbors = [[y-1, x], [y+1, x], [y, x-1], [y, x+1]];
                let isCoast = false;
                for(const [ny, nx] of neighbors) {
                    if (ny < 0 || ny >= gridSize || nx < 0 || nx >= gridSize || grid[ny][nx] === 'water') {
                        isCoast = true;
                        break;
                    }
                }
                if (isCoast) {
                    seawallCoords.push([y, x]);
                }
            }
        }
        seawallCoords.forEach(([y,x]) => grid[y][x] = 'seawall');


        // --- Layer 3: Road Generation ---
        const roadOffsetAmount = roadSpacing / 2;

        // Horizontal roads
        for (let y = 0; y < gridSize; y += roadSpacing) {
            const roadOffset = Math.floor((roadNoise.perlin2((y + roadOffsetY) * 0.1, seed) * roadOffsetAmount));
            const roadY = y + roadOffset;
            let lastWobbledY = -1;
            for (let x = 0; x < gridSize; x++) {
                const wobble = Math.floor((roadNoise.perlin2((x + roadOffsetX) * roadScale, (roadY + roadOffsetY) * 0.1) * roadWobble));
                const currentWobbledY = roadY + wobble;
                if (lastWobbledY !== -1) {
                    const startY = Math.min(lastWobbledY, currentWobbledY);
                    const endY = Math.max(lastWobbledY, currentWobbledY);
                    for (let j = startY; j <= endY; j++) {
                        if (j >= 0 && j < gridSize && grid[j][x] !== 'water' && grid[j][x] !== 'seawall') {
                            grid[j][x] = 'road';
                        }
                    }
                }
                lastWobbledY = currentWobbledY;
            }
        }

        // Vertical roads
        for (let x = 0; x < gridSize; x += roadSpacing) {
            const roadOffset = Math.floor((roadNoise.perlin2(seed, (x + roadOffsetX) * 0.1) * roadOffsetAmount));
            const roadX = x + roadOffset;
            let lastWobbledX = -1;
            for (let y = 0; y < gridSize; y++) {
                const wobble = Math.floor((roadNoise.perlin2((roadX + roadOffsetX) * 0.1, (y + roadOffsetY) * roadScale) * roadWobble));
                const currentWobbledX = roadX + wobble;
                if(lastWobbledX !== -1) {
                    const startX = Math.min(lastWobbledX, currentWobbledX);
                    const endX = Math.max(lastWobbledX, currentWobbledX);
                     for (let j = startX; j <= endX; j++) {
                        if (j >= 0 && j < gridSize && grid[y][j] !== 'water' && grid[y][j] !== 'seawall') {
                            grid[y][j] = 'road';
                        }
                    }
                }
                lastWobbledX = currentWobbledX;
            }
        }


        // --- Final Rendering and JSON Output ---
        cityData = {
            seed: seedString,
            gridSize: gridSize,
            tiles: []
        };
        cityGrid.innerHTML = '';
        cityGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        cityGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        cityGrid.style.width = '100%';
        cityGrid.style.height = '100%';

        for(let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const tileType = grid[y][x];
                cityData.tiles.push({ x, y, type: tileType });
                const tileDiv = document.createElement('div');
                tileDiv.classList.add('tile', tileType);
                cityGrid.appendChild(tileDiv);
            }
        }
        jsonOutput.textContent = JSON.stringify(cityData, null, 2);
    }

    // --- Export and UI Functions ---
    function downloadFile(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
    }

    function copyJsonToClipboard() {
        if (!cityData) return;
        const jsonString = JSON.stringify(cityData, null, 2);
        const textarea = document.createElement('textarea');
        textarea.value = jsonString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('JSON copied to clipboard!');
    }

    function convertJsonToXml(jsonObj) {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<city>\n';
        xml += `  <seed>${jsonObj.seed}</seed>\n`;
        xml += `  <gridSize>${jsonObj.gridSize}</gridSize>\n`;
        xml += '  <tiles>\n';
        jsonObj.tiles.forEach(tile => {
            xml += `    <tile x="${tile.x}" y="${tile.y}" type="${tile.type}" />\n`;
        });
        xml += '  </tiles>\n';
        xml += '</city>';
        return xml;
    }

    // --- Event Listeners ---
    function updateDisplayValues() {
        waterValueSpan.textContent = parseFloat(waterThresholdInput.value).toFixed(2);
        parkValueSpan.textContent = parseFloat(parkThresholdInput.value).toFixed(2);
        roadWobbleValueSpan.textContent = roadWobbleInput.value;
    }
    
    generateButton.addEventListener('click', generateCity);
    [waterThresholdInput, parkThresholdInput, roadWobbleInput].forEach(input => {
        input.addEventListener('input', updateDisplayValues);
    });

    copyJsonButton.addEventListener('click', copyJsonToClipboard);
    downloadJsonButton.addEventListener('click', () => {
        if (!cityData) return;
        downloadFile(JSON.stringify(cityData, null, 2), 'city.json', 'application/json');
    });
    downloadXmlButton.addEventListener('click', () => {
        if (!cityData) return;
        const xmlData = convertJsonToXml(cityData);
        downloadFile(xmlData, 'city.xml', 'application/xml');
    });

    // --- Initial Run ---
    updateDisplayValues();
    generateCity();
}

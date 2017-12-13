
function openSection(e) {
  let active = document.querySelector('#guide-sidebar .active');

  if (active) {
    document.querySelector(active.hash).classList.add('hidden');
    active.classList.remove('active');
  }

  e.target.classList.add('active');
  document.querySelector(e.target.hash).classList.remove('hidden');

  setTimeout(function() {
    document.querySelector('#guide-content').scrollTop = 0;
  });

}

function buildSections () {
  let sidebar = document.getElementById('guide-sidebar'),
      nav = sidebar.querySelector('.list-group'),
      sections = document.querySelectorAll('[section-title]');

  for (let section of sections) {
    let title = section.getAttribute('section-title')
        sectionId = section.getAttribute('id');

    let listItem = document.createElement('a');
    listItem.setAttribute('href', '#' + sectionId);
    listItem.setAttribute('class', 'list-group-item');
    listItem.innerHTML = title;
    listItem.onclick = openSection;
    nav.append(listItem);


    let sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = title;
    section.prepend(sectionTitle);

    section.classList.add('hidden');
  }
}

function parseCode (codeString, language) {
  if (language === 'html') {
    codeString = codeString.replace( /</ig, '&lt;')
      .replace( />/ig, '&gt;');
  }
  return codeString;
}

function buildExBlocks () {
  let blocks = document.querySelectorAll('.ex-block');
  for (let ex of blocks) {

    let blockTitle = document.createElement('h2');
    blockTitle.innerHTML = ex.getAttribute('block-title');
    blockTitle.classList.add('block-title')
    ex.prepend(blockTitle);

    let output = ex.querySelector('.output-block'),
        input = ex.querySelector('.input-block');

    if (!input) {
      input = document.createElement('pre');
      input.setAttribute('class', 'input-block');

      let code = document.createElement('code')
      code.setAttribute('class', 'html');

      code.innerHTML = output.innerHTML.slice();

      input.appendChild(code);
      ex.appendChild(input);
    }
  }
  document.querySelectorAll('code').forEach(code=> {
    code.innerHTML = parseCode(code.innerHTML, code.getAttribute('class'));
    hljs.highlightBlock(code)
  });

}

function loadHTML (){
  let elements = document.querySelectorAll('[file-src]'),
      promises = [];

  elements.forEach((div)=> {
    let promise = new Promise ((resolve, reject) => {
      let fileSrc = div.getAttribute('file-src'),
          xhttp = new XMLHttpRequest();

      xhttp.open("GET", fileSrc, true);
      xhttp.onload = ()=> {
        if (xhttp.status === 200) {
          div.innerHTML = xhttp.responseText;
          div.removeAttribute("file-src");
          resolve(xhttp.responseText);
          console.log('Loaded:'+fileSrc)
        } else {
          reject(xhttp.status);
        }
      };
      xhttp.onerror = () => reject(xhttp.statusText);
      xhttp.send();
    });
    promises.push(promise);
  })

  return Promise.all(promises)
}

(function() {
  loadHTML()
  .then(()=> {
    buildSections();
    buildExBlocks();

    // Activate Current Section
    let link = window.location.hash ?
      document.querySelector(`[href="${ window.location.hash }"]`) :
      document.querySelector(`[href="#home"]`);

    if (!link) {
      link = document.querySelector(`[href="#home"]`);
    }

    link.click();

    document.querySelectorAll('input[checked="checked"]').forEach((el)=>{
      el.checked = true;
    })

    // Reveal Main Content
    document.getElementById('main-content').classList.remove('hidden');
  })
  .catch((err)=> console.log(err));;
})();

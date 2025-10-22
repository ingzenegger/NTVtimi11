const output = document.getElementById("aefingar")

/// ------ HELPER FUNCTIONS  ------- 

function addSection(title, subtitle) {
    const section = document.createElement("section")
    section.style.marginBottom = "30px"

    const h3 = document.createElement("h3")
    h3.textContent = title
    section.appendChild(h3)

    if (subtitle) {
        const p = document.createElement("p")
        p.textContent = subtitle
        p.style.marginTop = "4px"
        p.style.opacity = "0.8"
        section.appendChild(p)
    }
    output.appendChild(section)
    return section
}

// FOR LOOP
// s er hér notað sem stytting fyrir section sem er returnað frá addSection falli
{ 
    const s = addSection("Æfing 1: For loop", "Gerum 5 sinnum töflu")
    for (let i = 1; i <= 10; i++) {
        const p = document.createElement("p")
        p.textContent = `5 * ${i} = ${5*i}`
        s.appendChild(p)
    }
}

/// FOR LOOP MEÐ CONTINUE

{ 
    const s = addSection("Æfing 2: For loop með continue", "Prenta countdown frá 10 en sleppa tölunni 5")
    for (let i = 10; i >= 0; i--) {
        if (i === 5) {
            continue
        }
        const p = document.createElement ("p")
        p.textContent = `${i}`
        s.appendChild(p)
    }
}

// FOR LOOP MEÐ BREAK
 {
    const s = addSection("Æfing 3: For loop með break", "Teljum frá 1 upp í 10 en hættum um leið og fyrsta tala sem deilist með 6 kemur upp")
    for (let i = 1; i <= 10; i++) {
        if (i % 6 === 0) {
            
        const p = document.createElement ("p")
        p.textContent = `Stoppum á tölu ${i}, því hún er deilanleg með 6`
        s.appendChild(p)
        break
        }
        const p = document.createElement("p")
        p.textContent = i
        s.appendChild(p)
    }
 }

 
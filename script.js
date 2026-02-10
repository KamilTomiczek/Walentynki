document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const letter = document.getElementById("letter");

    var open = false;
    var letteropen = false;
    var f = false;

    function openEnvelope(){
        envelope.classList.add("open");
        envelope.classList.remove("close");
        open = true;
    }

    function closeEnvelope(){
        envelope.classList.add("close");
        envelope.classList.remove("open");
        open = false;
        letteropen = false;
        f = false;
    }

    function openLetter(){
        letter.classList.remove("letter-close");
        letter.classList.add("letter-open");
        letteropen = true;
    }

    function closeLetter(){
        letter.classList.remove("letter-open");
        letter.classList.add("letter-close");
        letter.scrollTop = 0;
        letteropen = false;
        f = true;
    }

    envelope.addEventListener("click", () => {
        if(open)
            if(letteropen)
                closeLetter();
            else
                if(f)
                    closeEnvelope();
                else
                    openLetter();
        else
            openEnvelope();
    });
});
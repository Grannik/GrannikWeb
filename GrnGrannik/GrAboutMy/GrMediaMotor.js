//--- Переключалка About Me --------------------------------------------------------
function fAboutMe()
{
document.title="Кратко о себе";
var p;
  p = document.getElementById('titleDiv');
  p.innerHTML = 'Кратко о себе';

    display = document.getElementById('ulAboutMe').style.display;
    if(display=='none')
    {
       document.getElementById('ulAboutMe').style.display='block';
       document.getElementById('liAboutMe').style.listStyleImage = "url('pictMda/B.gif')";
       document.getElementById('liAboutMe').style.backgroundColor="Silver";
    }
    else
    {
       document.getElementById('ulAboutMe').style.display='none';
       document.getElementById('liAboutMe').style.listStyleImage = "url('pictMda/D.gif')";
       document.getElementById('liAboutMe').style.backgroundColor="DarkGray";
    }
}
// --- Мои статьи --------------------------------------------------
function fMoiStatti()
{
document.title="Мои статьи";
var p;
  p = document.getElementById('titleDiv');
  p.innerHTML = 'Мои статьи';

    display = document.getElementById('ulMoiStatti').style.display;
    if(display=='none')
    {
       document.getElementById('ulMoiStatti').style.display='block';
       document.getElementById('liMoiStatti').style.listStyleImage = "url('pictMda/B.gif')";
       document.getElementById('liMoiStatti').style.backgroundColor="Silver";
    }
    else
    {
       document.getElementById('ulMoiStatti').style.display='none';
       document.getElementById('liMoiStatti').style.listStyleImage = "url('pictMda/D.gif')";
       document.getElementById('liMoiStatti').style.backgroundColor="DarkGray";
    }
}
// --- «ВЫСОКОПОСТАВЛЕННЫЕ ЧИНОВНИКИ ЛУГАНДОНИИ» РЕДКО УПОМНАЮТСЯ... -----------------------------
function fComent()
{
document.title="«ВЫСОКОПОСТАВЛЕННЫЕ ЧИНОВНИКИ ЛУГАНДОНИИ» РЕДКО УПОМНАЮТСЯ...";
var p;
  p = document.getElementById('titleDiv');
  p.innerHTML = '«ВЫСОКОПОСТАВЛЕННЫЕ ЧИНОВНИКИ ЛУГАНДОНИИ» РЕДКО УПОМНАЮТСЯ...';

    display = document.getElementById('ulComent').style.display;
    if(display=='none')
    {
       document.getElementById('ulComent').style.display='block';
       document.getElementById('liComent').style.listStyleImage = "url('pictMda/B.gif')";
       document.getElementById('liComent').style.backgroundColor="Silver";
    }
    else
    {
       document.getElementById('ulComent').style.display='none';
       document.getElementById('liComent').style.listStyleImage = "url('pictMda/D.gif')";
       document.getElementById('liComent').style.backgroundColor="DarkGray";
    }
}
// --- Добровольцы — преступники для российской пропаганды -----------------------------
function fliC()
{
document.title="Добровольцы — преступники для российской пропаганды";
var p;
  p = document.getElementById('titleDiv');
  p.innerHTML = 'Добровольцы — преступники для российской пропаганды';

    display = document.getElementById('ulC').style.display;
    if(display=='none')
    {
       document.getElementById('ulC').style.display='block';
       document.getElementById('liC').style.listStyleImage = "url('pictMda/B.gif')";
       document.getElementById('liC').style.backgroundColor="Silver";
    }
    else
    {
       document.getElementById('ulC').style.display='none';
       document.getElementById('liC').style.listStyleImage = "url('pictMda/D.gif')";
       document.getElementById('liC').style.backgroundColor="DarkGray";
    }
}
// ---  -----------------------------
function fliD()
{
document.title="ЗАПРЕТ НА МИРНОЕ СОБРАНИЕ";
var p;
  p = document.getElementById('titleDiv');
  p.innerHTML = 'ЗАПРЕТ НА МИРНОЕ СОБРАНИЕ';

    display = document.getElementById('ulD').style.display;
    if(display=='none')
    {
       document.getElementById('ulD').style.display='block';
       document.getElementById('liD').style.listStyleImage = "url('pictMda/B.gif')";
       document.getElementById('liD').style.backgroundColor="Silver";
    }
    else
    {
       document.getElementById('ulD').style.display='none';
       document.getElementById('liD').style.listStyleImage = "url('pictMda/D.gif')";
       document.getElementById('liD').style.backgroundColor="DarkGray";
    }
}

const S={ water:'<svg viewBox="0 
0 800 300"><defs><linearGradient 
id="a" x1="0" y1="0" x2="0" 
y2="1"><stop offset="0" 
stop-color="#bfe3f2"/><stop 
offset="1" 
stop-color="#eaf6fa"/></linearGradient></defs><rect 
width="800" height="300" 
fill="url(#a)"/><path d="M0 
200q120-70 240-20t240-10 
320-50v180H0z" 
fill="#6aa86b"/><path d="M0 
250q200-60 400-10t400-20v80H0z" 
fill="#2c8fb5"/><path d="M0 
270q200-40 400 0t400-10" 
stroke="#fff" stroke-opacity=".5" 
stroke-width="3" fill="none"/><g 
fill="#fff" opacity=".9"><ellipse 
cx="140" cy="60" rx="50" 
ry="16"/><ellipse cx="600" 
cy="80" rx="64" 
ry="18"/></g><path d="M300 120l10 
22 10-22z" 
fill="#2c8fb5"/></svg>', 
cryo:'<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" 
fill="#cfe9f6"/><path d="M0 
300V190l120-110 90 70 110-90 160 
150 120-80 200 120v50z" 
fill="#fff"/><path d="M0 
300V230l150-60 140 50 140-40 160 
60 210-50v110z" 
fill="#bfdff0"/><path d="M0 
270q200-30 400 0t400-8v38H0z" 
fill="#1e6f97"/><path d="M560 
252l30-50 40 50z" 
fill="#fff"/></svg>', ocean:'<svg 
viewBox="0 0 800 
300"><defs><linearGradient id="o" 
x1="0" y1="0" x2="0" y2="1"><stop 
offset="0" 
stop-color="#3aa6c8"/><stop 
offset="1" 
stop-color="#0a3f66"/></linearGradient></defs><rect 
width="800" height="300" 
fill="url(#o)"/><g fill="none" 
stroke="#bfeaf7" stroke-width="4" 
stroke-linecap="round" 
opacity=".8"><path d="M20 
80q50-30 100 0t100 0t100 0t100 
0t100 0t100 0t100 0"/><path d="M0 
150q50-30 100 0t100 0t100 0t100 
0t100 0t100 0t100 0t100 0"/><path 
d="M20 220q50-30 100 0t100 0t100 
0t100 0t100 0t100 0"/></g><circle 
cx="650" cy="50" r="22" 
fill="#ffd36b"/></svg>', 
life:'<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" 
fill="#d8efd9"/><circle cx="660" 
cy="60" r="30" 
fill="#ffd36b"/><path d="M0 
230q200-60 400-10t400-40v120H0z" 
fill="#4c9a58"/><g 
fill="#2f7a42"><path d="M120 
230l30-90 30 90z"/><path d="M200 
235l24-70 24 70z"/><path d="M520 
225l34-100 34 100z"/><path 
d="M610 232l24-64 24 64z"/></g><g 
fill="#7fc47d"><circle cx="360" 
cy="200" r="22"/><circle cx="395" 
cy="206" r="18"/></g></svg>', 
air:'<svg viewBox="0 0 800 
300"><defs><linearGradient id="s" 
x1="0" y1="0" x2="0" y2="1"><stop 
offset="0" 
stop-color="#1c5f95"/><stop 
offset="1" 
stop-color="#bfe3f4"/></linearGradient></defs><rect 
width="800" height="300" 
fill="url(#s)"/><g 
fill="#fff"><ellipse cx="180" 
cy="110" rx="90" 
ry="30"/><ellipse cx="240" 
cy="90" rx="60" ry="30"/><ellipse 
cx="560" cy="170" rx="110" 
ry="34"/><ellipse cx="620" 
cy="146" rx="70" 
ry="32"/></g><path d="M0 
280q300-60 800-10v30H0z" 
fill="#3b7a58"/></svg>', 
solid:'<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" 
fill="#f1d9bd"/><path d="M0 
120h800v40H0z" 
fill="#b77b4e"/><path d="M0 
160h800v140H0z" 
fill="#d25a3a"/><path d="M400 
160l-60 140h120z" 
fill="#ffb347"/><path d="M0 
120l120-70 90 40 100-60 120 
90H0z" fill="#8c6a52"/><path 
d="M450 120l110-80 90 50 
150-30v60z" 
fill="#a0785d"/></svg>'}; const 
T=[ 
{id:'water',nav:'Water',title:'Freshwater',lead:'Every 
community depends on water: where 
it flows, how much there is and 
how it is used. NASA satellites 
and stream gauges together show 
the global picture.',cap:'Rivers, 
lakes and groundwater form the 
hydrological cycle.',items:[ 
['River discharge','Discharge is 
the volume of water passing a 
point in a river each second, 
measured in cubic meters per 
second. NASA’s SWOT mission 
bounces radar off water surfaces 
to measure height, and GRACE and 
GRACE-FO track tiny changes in 
gravity that reveal water 
movement. Together with stream 
gauges, they support flood 
forecasts and nutrient 
studies.'], ['Aquifers and 
groundwater','Aquifers are 
underground rock layers that hold 
the fresh water we reach through 
wells and springs. Irrigation 
often drains them faster than 
they recharge, and GRACE measures 
those gains and losses from 
space.'], ['Floods','Floods are 
among the costliest natural 
disasters. NOAA estimates US 
flooding cost over $200 billion 
between 1980 and 2024, and heavy 
rainfall events are changing how 
often and how severely floods 
strike.'], ['Water 
management','Dams, groundwater 
protection rules and irrigation 
monitoring all aim to keep people 
safe while using water 
efficiently. Satellite data helps 
managers do this across 
borders.'], ['Water 
temperature','Warm water drives 
fish decline, coral bleaching and 
toxic algae blooms. Warmer oceans 
also feed stronger storms and 
raise sea level through thermal 
expansion.']]}, 
{id:'ice',nav:'Ice and 
snow',title:'The 
cryosphere',lead:'About 15 
million square kilometers of 
Earth is covered by ice and snow. 
It reflects sunlight, stores 
fresh water and reacts fast to a 
warming planet.',cap:'Glaciers 
and sea ice shape coastlines and 
the climate.',lab:1,items:[ 
['Glaciers and ice 
sheets','Glaciers are “rivers of 
ice” that flow under gravity. 
They hold nearly 70% of the 
world’s fresh water; if all land 
ice melted, sea level would rise 
about 70 meters. Ice sheets can 
move from a few centimeters a 
year at the center to 15 
kilometers a year near the 
coast.'],
['Icebergs','Icebergs break off glaciers

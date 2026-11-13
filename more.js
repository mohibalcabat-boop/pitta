const 
add=(id,items)=>T.find(t=>t.id===id).items.push(...items); 
S.earth='<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" fill="#0b1d33"/><g 
fill="#fff" opacity=".7"><circle 
cx="60" cy="40" r="2"/><circle 
cx="300" cy="30" r="2"/><circle 
cx="700" cy="60" r="2"/><circle 
cx="500" cy="270" 
r="2"/></g><circle cx="400" 
cy="150" r="100" 
fill="#2c8fb5"/><path d="M340 
110q30-24 54 0t-10 36-44 0zM410 
160q34-14 50 14t-24 36z" 
fill="#6fbf73"/><ellipse cx="400" 
cy="150" rx="190" ry="50" 
fill="none" stroke="#9fe0ef" 
stroke-opacity=".5" 
stroke-dasharray="6 8"/></svg>'; 
S.sun='<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" 
fill="#07122a"/><circle cx="90" 
cy="150" r="70" 
fill="#ffb02e"/><path d="M170 
120h300M170 150h300M170 180h300" 
stroke="#ffb02e" stroke-width="4" 
opacity=".5"/><circle cx="600" 
cy="150" r="80" 
fill="#2c8fb5"/><path d="M520 
150a80 80 0 0 1 160 0" 
fill="none" stroke="#5be3a0" 
stroke-width="8" 
opacity=".8"/><path d="M500 
80q-40 70 0 140" fill="none" 
stroke="#9fe0ef" 
stroke-width="4"/></svg>'; 
S.people='<svg viewBox="0 0 800 
300"><rect width="800" 
height="300" fill="#dbe9f3"/><g 
fill="#5a7a96"><rect x="80" 
y="120" width="70" 
height="180"/><rect x="170" 
y="70" width="80" 
height="230"/><rect x="270" 
y="140" width="60" 
height="160"/><rect x="480" 
y="100" width="90" 
height="200"/><rect x="590" 
y="150" width="70" 
height="150"/></g><path d="M0 
280h800v20H0z" fill="#4c9a58"/><g 
fill="#ffd36b"><rect x="190" 
y="100" width="12" 
height="12"/><rect x="215" 
y="140" width="12" 
height="12"/><rect x="505" 
y="130" width="12" 
height="12"/></g></svg>'; 
T.unshift({id:'earth',nav:'Earth 
science',title:'The map of Earth 
science',lead:'Earth science 
studies the planet’s structure, 
materials, processes and history. 
It has four main branches, linked 
by many related 
fields.',cap:'Four branches, one 
planet.',items:[ ['Geology: the 
solid Earth','Geology studies 
rocks, minerals and landforms. 
Its fields include mineralogy, 
petrology, structural geology, 
volcanology, seismology, 
paleontology, stratigraphy, 
geomorphology and economic 
geology (ores, oil, gas and 
coal).'], ['Oceanography: the 
water bodies','Physical 
oceanography covers currents, 
waves and tides; chemical studies 
salinity; biological studies 
marine life; and marine geology 
studies the seafloor, trenches 
and ridges.'], ['Meteorology and 
climatology: the 
atmosphere','Meteorology handles 
short-term weather, storms and 
forecasts. Climatology studies 
long-term patterns and change. 
Atmospheric chemistry covers 
gases, ozone and air 
pollution.'], ['Astronomy and 
planetary science: Earth in 
space','This branch covers 
seasons, day and night and the 
Moon’s effect on tides, and 
compares Earth with other planets 
to learn how planets form and 
evolve.'], ['Why connect 
them?','Water, ice, life, air and 
rock constantly exchange energy 
and matter. Understanding one 
sphere means following its links 
to the others.']]}); 
add('water',[ ['Global water 
use','UN figures show water use 
is growing about twice as fast as 
population. Groundwater is 
falling where irrigation outpaces 
recharge, and many rivers and 
lakes cross borders, so satellite 
data helps countries share one 
picture.'], ['Sediment','Sediment 
is loose particles from eroded 
rock, moved by rivers, wind, 
floods and storms. It can refresh 
farmland, but too much clogs 
reservoirs and contaminated 
sediment can poison wildlife.'], 
['Estuaries','Estuaries are where 
river water meets the sea, like 
the Chesapeake Bay. They are 
highly productive habitats that 
filter pollutants and absorb 
floods and storm surges.'], 
['Flood trends','US floods have 
grown in the Northeast and 
Midwest and eased in the Rockies 
and West, matching changes in 
heavy rainfall. New England has 
seen more frequent floods since 
the 1940s.']]); add('ice',[ ['Why 
ice and snow matter','Bright snow 
and ice have high albedo and 
reflect sunlight. As they shrink, 
more heat is absorbed. Their 
runoff also sets river timing and 
flood risk for billions of 
people.'], ['What NASA 
measures','Satellites track how 
much polar ice is melting, how 
dust and soot darken snow, and 
how permafrost loss could release 
stored carbon.'], ['Glacier mass 
balance','Mass balance is a 
glacier’s yearly net gain or 
loss. Snowfall adds mass; melting 
and calving remove it. It shows 
how much fresh water ice can 
supply and how much it adds to 
sea level.'], ['Lake ice 
turnover','Cold air cools the 
surface water until it sinks and 
pushes warmer water up. Once the 
surface freezes, the ice 
insulates the lake. Freeze and 
melt dates are key climate 
indicators.'], ['Ice 
thickness','Ice ranges from a few 
sheets of paper to over 20 meters 
thick. Thickness informs safe 
routes, animal behavior and links 
to climate and sea level.'], 
['Ice age stages','Ocean ice is 
new under 10 cm, young at 10 to 
30 cm, first-year above 30 cm, 
and multiyear once it survives a 
summer, usually 2 to 4 meters 
thick.']]); add('ocean',[
['Ocean overview','The ocean holds about 97% of Earth’s water. NASA data capture circulation, wi

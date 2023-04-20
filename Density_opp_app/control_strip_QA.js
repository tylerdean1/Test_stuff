/*The constants are broken down by the different form sections to make it easier to read/track.

The first section is the General Test Setup Info Section */

const QACS_nuclear = document.getElementById("QACS_nuclear")
const QACS_nonNuclear = document.getElementById("QACS_nonNuclear")
const QACS_qaCtrDate = document.getElementById("QACS_qaCtrDate")
const QACS_name = document.getElementById("QACS_name")
const QACS_hicamsNum = document.getElementById("QACS_hicamsNum")
const QACS_contractNum = document.getElementById("QACS_contractNum")
const QACS_county = document.getElementById("QACS_county")
const QACS_ctrStripNum = document.getElementById("QACS_ctrStripNum")
const QACS_startStation = document.getElementById("QACS_startStation")
const QACS_endStation = document.getElementById("QACS_endStation")
const QACS_lane = document.getElementById("QACS_lane")
const QACS_layer = document.getElementById("QACS_layer")
const QACS_depth = document.getElementById("QACS_depth")
const QACS_width = document.getElementById("QACS_width")
const QACS_routeMap = document.getElementById("QACS_routeMap")
const QACS_jmf = document.getElementById("QACS_jmf")
const QACS_gSerialNum = document.getElementById("QACS_gSerialNum")
const QACS_material = document.getElementById("QACS_material")
const QACS_crewNum = document.getElementById("QACS_crewNum")

/* This is the Standard Counts Section */
//                     System 1
const QACS_sys1 = document.getElementById("QACS_sys1")
const QACS_sys1Plus = document.getElementById("QACS_sys1Plus")
const QACS_sys1Minus = document.getElementById("QACS_sys1Minus")
//                     System 2
const QACS_sys2 = document.getElementById("QACS_sys2")
const QACS_sys2Plus = document.getElementById("QACS_sys2Plus")
const QACS_sys2Minus = document.getElementById("QACS_sys2Minus")

/* This is the Core Samples Section */
//                           Core 1
const QACS_coreName1 = document.getElementById("QACS_coreName1")
const QACS_stationNum1 = document.getElementById("QACS_stationNum1")
const QACS_percentCompaction1 = document.getElementById("QACS_percentCompaction1")
//                           Core 2
const QACS_coreName2 = document.getElementById("QACS_coreName2")
const QACS_stationNum2 = document.getElementById("QACS_stationNum2")
const QACS_percentCompaction2 = document.getElementById("QACS_percentCompaction2")
//                           Core 3
const QACS_coreName3 = document.getElementById("QACS_coreName3")
const QACS_stationNum3 = document.getElementById("QACS_stationNum3")
const QACS_percentCompaction3 = document.getElementById("QACS_percentCompaction3")
//                           Core 4
const QACS_coreName4 = document.getElementById("QACS_coreName4")
const QACS_stationNum4 = document.getElementById("QACS_stationNum4")
const QACS_percentCompaction4 = document.getElementById("QACS_percentCompaction4")
//                           Core 5
const QACS_coreName5 = document.getElementById("QACS_coreName5")
const QACS_stationNum5 = document.getElementById("QACS_stationNum5")
const QACS_percentCompaction5 = document.getElementById("QACS_percentCompaction5")
//                           Core Average
const QACS_coreAvg = document.getElementById("QACS_coreAvg")

/* This is the Gauge Readings Section */
//                           Core 1
const QACS_testStationNum1 = document.getElementById("QACS_testStationNum1")
const QACS_firstShot1 = document.getElementById("QACS_firstShot1")
const QACS_secondShot1 = document.getElementById("QACS_secondShot1")

//                           Core 2
const QACS_testStationNum2 = document.getElementById("QACS_testStationNum2")
const QACS_firstShot2 = document.getElementById("QACS_firstShot2")
const QACS_secondShot2 = document.getElementById("QACS_secondShot2")

//                           Core 3
const QACS_testStationNum3 = document.getElementById("QACS_testStationNum3")
const QACS_firstShot3 = document.getElementById("QACS_firstShot3")
const QACS_secondShot3 = document.getElementById("QACS_secondShot3")

//                           Core 4
const QACS_testStationNum4 = document.getElementById("QACS_testStationNum4")
const QACS_firstShot4 = document.getElementById("QACS_firstShot4")
const QACS_secondShot4 = document.getElementById("QACS_secondShot4")

//                           Core 5
const QACS_testStationNum5 = document.getElementById("QACS_testStationNum5")
const QACS_firstShot5 = document.getElementById("QACS_firstShot5")
const QACS_secondShot5 = document.getElementById("QACS_secondShot5")

//                           Average PCF and Correlated Target
const QACS_avgPCF = document.getElementById("QACS_avgPCF")
const QACS_correlatedTargetDensity = document.getElementById("QACS_correlatedTargetDensity")




/* constName.addEventListener("change", () => {
    whatever you want the function to do.. 
    
})  */

QACS_nuclear.addEventListener("change", () => {
    return console.log("something has changed");
    
})
/*The constants are broken down by the different form sections to make it easier to read/track.

The first section is the General Test Setup Info Section */
let QACS_nuclear = document.querySelector("#QACS_nuclear")
let QACS_nonNuclear = document.querySelector("#QACS_nonNuclear")
let QACS_qaCtrDate = document.querySelector("#QACS_qaCtrDate")
let QACS_name = document.querySelector("#QACS_name")
let QACS_hicamsNum = document.querySelector("#QACS_hicamsNum")
let QACS_contractNum = document.querySelector("#QACS_contractNum")
let QACS_county = document.querySelector("#QACS_county")
let QACS_ctrStripNum = document.querySelector("#QACS_ctrStripNum")
let QACS_startStation = document.querySelector("#QACS_startStation")
let QACS_endStation = document.querySelector("#QACS_endStation")
let QACS_lane = document.querySelector("#QACS_lane")
let QACS_layer = document.querySelector("#QACS_layer")
let QACS_depth = document.querySelector("#QACS_depth")
let QACS_width = document.querySelector("#QACS_width")
let QACS_routeMap = document.querySelector("#QACS_routeMap")
let QACS_jmf = document.querySelector("#QACS_jmf")
let QACS_gSerialNum = document.querySelector("#QACS_gSerialNum")
let QACS_material = document.querySelector("#QACS_material")
let QACS_crewNum = document.querySelector("#QACS_crewNum")

/* This is all of the stuff needed to switch from a Nuclear Gauge to Non-Nuclear */
let QACS_secondShot_1 = document.querySelector("#QACS_secondShot_1")
let QACS_secondShot_2 = document.querySelector("#QACS_secondShot_2")
let QACS_secondShot_3 = document.querySelector("#QACS_secondShot_3")
let QACS_secondShot_4 = document.querySelector("#QACS_secondShot_4")
let QACS_secondShot_5 = document.querySelector("#QACS_secondShot_5")
let QACS_SCTitle = document.querySelector("#QACS_SCTitle")
let standardCountsDiv = document.querySelector("#standardCountsDiv")
let QACS_standardCounts = document.querySelector("#QACS_standardCounts")
let QAcores1 = document.querySelector("#QAcores1Div")
let QAcores2 = document.querySelector("#QAcores2Div")
let QAcores3 = document.querySelector("#QAcores3Div")
let QAcores4 = document.querySelector("#QAcores4Div")
let QAcores5 = document.querySelector("#QAcores5Div")
let nucBool = true

/* This is the Standard Counts Section */

//                     System 1
let QACS_sys1 = document.querySelector("#QACS_sys1")
let QACS_sys1Plus = document.querySelector("#QACS_sys1Plus")
let QACS_sys1Minus = document.querySelector("#QACS_sys1Minus")
//                     System 2
let QACS_sys2 = document.querySelector("#QACS_sys2")
let QACS_sys2Plus = document.querySelector("#QACS_sys2Plus")
let QACS_sys2Minus = document.querySelector("#QACS_sys2Minus")



/* This is the Core Samples Section */
//                           Core 1
let QACS_coreName1 = document.querySelector("#QACS_coreName1")
let QACS_stationNum1 = document.querySelector("#QACS_stationNum1")
let QACS_percentCompaction1 = document.querySelector("#QACS_percentCompaction1")
//                           Core 2
let QACS_coreName2 = document.querySelector("#QACS_coreName2")
let QACS_stationNum2 = document.querySelector("#QACS_stationNum2")
let QACS_percentCompaction2 = document.querySelector("#QACS_percentCompaction2")
//                           Core 3
let QACS_coreName3 = document.querySelector("#QACS_coreName3")
let QACS_stationNum3 = document.querySelector("#QACS_stationNum3")
let QACS_percentCompaction3 = document.querySelector("#QACS_percentCompaction3")
//                           Core 4
let QACS_coreName4 = document.querySelector("#QACS_coreName4")
let QACS_stationNum4 = document.querySelector("#QACS_stationNum4")
let QACS_percentCompaction4 = document.querySelector("#QACS_percentCompaction4")
//                           Core 5
let QACS_coreName5 = document.querySelector("#QACS_coreName5")
let QACS_stationNum5 = document.querySelector("#QACS_stationNum5")
let QACS_percentCompaction5 = document.querySelector("#QACS_percentCompaction5")
//                           Core Average
let QACS_coreAvg = document.querySelector("#QACS_coreAvg")



/* This is the Gauge Readings Section */
//                           Core 1
let QACS_testStationNum1 = document.querySelector("#QACS_testStationNum1")
let QACS_firstShot1 = document.querySelector("#QACS_firstShot1")
let QACS_secondShot1 = document.querySelector("#QACS_secondShot1")

//                           Core 2
let QACS_testStationNum2 = document.querySelector("#QACS_testStationNum2")
let QACS_firstShot2 = document.querySelector("#QACS_firstShot2")
let QACS_secondShot2 = document.querySelector("#QACS_secondShot2")

//                           Core 3
let QACS_testStationNum3 = document.querySelector("#QACS_testStationNum3")
let QACS_firstShot3 = document.querySelector("#QACS_firstShot3")
let QACS_secondShot3 = document.querySelector("#QACS_secondShot3")

//                           Core 4
let QACS_testStationNum4 = document.querySelector("#QACS_testStationNum4")
let QACS_firstShot4 = document.querySelector("#QACS_firstShot4")
let QACS_secondShot4 = document.querySelector("#QACS_secondShot4")

//                           Core 5
let QACS_testStationNum5 = document.querySelector("#QACS_testStationNum5")
let QACS_firstShot5 = document.querySelector("#QACS_firstShot5")
let QACS_secondShot5 = document.querySelector("#QACS_secondShot5")

//                           Average PCF and Correlated Target
let QACS_avgPCF = document.querySelector("#QACS_avgPCF")
let QACS_correlatedTargetDensity = document.querySelector("#QACS_correlatedTargetDensity")




/* constName.addEventListener("change", () => {
    whatever you want the function to do.. 
    
})  */


/* This section is the script for changing gauge types. */

QACS_nuclear.addEventListener('click', () => {
    nucBool = true
    standardCountsDiv.append(QACS_SCTitle, QACS_standardCounts)
    QAcores1.append(QACS_secondShot_1)
    QAcores2.append(QACS_secondShot_2)
    QAcores3.append(QACS_secondShot_3)
    QAcores4.append(QACS_secondShot_4)
    QAcores5.append(QACS_secondShot_5)
    
})

QACS_nonNuclear.addEventListener('click', () => {
    nucBool = false
    QACS_SCTitle.remove()
    QACS_standardCounts.remove()
    QACS_secondShot_1.remove()
    QACS_secondShot_2.remove()
    QACS_secondShot_3.remove()
    QACS_secondShot_4.remove()
    QACS_secondShot_5.remove()
    
})

QACS_startStation.addEventListener('change', () => {
    QACS_stationNum1 = QACS_startStation + 50
})





QACS_sys1.addEventListener('change', () => {
    alert('I clicked the box')
})

import React, { useState } from "react";
import Header from "../components/Header";
import Interaction from "../components/Interaction";
import ScheduleSelection from "../components/ScheduleSelection";

export default function Schedule() {

    return (
        <>
            <Header />
            <Interaction title={"Selecione o horário"}/>
            <ScheduleSelection />
        </>

    );
}
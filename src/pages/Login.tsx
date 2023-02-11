import React from "react";
import {PrimaryInput} from "../components/UI/primary-input/PrimaryInput.";
import {PrimaryButton} from "../components/UI/primary-button/PrimaryButton";

export const Login = () => {
    return (
        <div>
            <h1>Страница логина!</h1>
            <form action="#">
                <PrimaryInput placeholder={"Ваш e-mail"} />
                <PrimaryInput placeholder={"Ваш пароль"} />
                <PrimaryButton type={"button"}>
                    Вход
                </PrimaryButton>
            </form>
        </div>
    );
};
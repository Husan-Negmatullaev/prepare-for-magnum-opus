import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <div className={"error"}>
            <h1>Упс!</h1>
            <p>К сожалению, произошла непредвиденная ошибка.</p>
            <p>
                {/*@ts-ignore*/}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
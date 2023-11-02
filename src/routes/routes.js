import JackpotFundsController from "../components/JackpotFundsController"
import JackpotLightController from "../components/JackpotLightController"

const { Routes, Route, Navigate } = require("react-router-dom")

export const Routing = () => {

    const publicRoutes = [
        {
            path: "/",
            element: <JackpotLightController />,
        },
        {
            path: "/fund",
            element: <JackpotFundsController />,
        },
        {
            path: "*",
            element: <Navigate to="/" replace />,
        }
    ]
    return (
        <Routes>
            {publicRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element

                        }
                    />
                )
            })}

        </Routes>
    )
}
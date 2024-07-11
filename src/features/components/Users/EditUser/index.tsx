import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store.ts";
import {GridRowsProp} from "@mui/x-data-grid";
import {useParams} from "react-router-dom";
import {UserType} from "../../../../common/types.ts";

export const EditUser = () => {
    const users = useSelector<AppRootStateType, GridRowsProp>((state) => state.users);
    const params = useParams()

    const currentUser = users.find((el: UserType) => {
        return el.id === Number(params.id)
    })

    return (
        <div>
            <div>

            </div>
        </div>
    );
};

{/*<form action="" style={{display: "flex"}}>*/
}
{/*    <label style={{display: "flex", flexDirection: "column"}}>*/
}
{/*        В архиве*/
}
{/*        <input type="checkbox" placeholder={'isArchive'}/>*/
}
{/*    </label>*/
}

{/*    <label style={{display: "flex", flexDirection: "column"}}>*/
}
{/*        Имя*/
}
{/*        <input type="text" placeholder={'name'}/>*/
}
{/*    </label>*/
}

{/*    <label style={{display: "flex", flexDirection: "column"}}>*/
}
{/*        Должность*/
}
{/*        <input type="text" placeholder={'role'}/>*/
}
{/*    </label>*/
}

{/*    <label style={{display: "flex", flexDirection: "column"}}>*/
}
{/*        Телефон*/
}
{/*        <input type="text" placeholder={'role'}/>*/
}
{/*    </label>*/
}

{/*    <label style={{display: "flex", flexDirection: "column"}}>*/
}
{/*        Дата рождения*/
}
{/*        <input type="date" placeholder={'role'}/>*/
}
{/*    </label>*/
}
{/*    <div>*/
}
{/*        <button>send</button>*/
}
{/*    </div>*/
}
{/*</form>*/
}
export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'

            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'

            },
            {
                name: 'menu.admin.manage-employee', link: '/system/user-employee'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'

            }

        ]
    },
    { //quản lý dự án
        name: 'menu.admin.project',
        menus: [
            {
                name: 'menu.admin.manage-project', link: '/system/manage-project'

            },
        ]
    },
    { //quản lý phòng ban
        name: 'menu.admin.department',
        menus: [
            {
                name: 'menu.admin.manage-department', link: '/system/manage-department' 

            },
            

        ]
    },
    { //quản lý tin tức
        name: 'menu.admin.post',
        menus: [
            {
                name: 'menu.admin.manage-post', link: '/system/manage-post' 

            },
            

        ]
    },
];
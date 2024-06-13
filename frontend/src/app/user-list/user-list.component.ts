import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: any[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getAllUsers().subscribe(
            (data) => {
                this.users = data;
            },
            (error) => {
                console.error('Error al cargar usuarios:', error);
            }
        );
    }

    deleteUser(id: string) {
        this.userService.deleteUser(id).subscribe(
            () => {
                console.log('Usuario eliminado correctamente');
                this.loadUsers();
            },
            (error) => {
                console.error('Error al eliminar usuario:', error);
            }
        );
    }
}
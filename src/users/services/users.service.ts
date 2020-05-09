import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) { }

    findOne(userId: number): Promise<User> {
        return this.repository.findOne(userId);
    }

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.repository.findOne({ username });
    }

    async update(id: number, item: Partial<User>): Promise<void> {
        await this.repository.update(id, item);
    }

}

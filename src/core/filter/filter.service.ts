import { Injectable } from '@nestjs/common';
import { Raw, Between, MoreThan } from 'typeorm';

@Injectable()
export class FilterService {

    generateWhereFromFilter(filter: { year?: number, month?: number }) {
        const { year, month } = filter;
        if (year == 13 && !month) {
            return this.generateLastYearWhere(year);
        } else if (year && !month) {
            return this.generateEntireYearWhere(year);
        } else if (year && month) {
            return this.generateEntireYearFromDateWhere(year, month);
        } if (!year && !month) {
            return this.generateLastYearWhere(new Date().getFullYear());
        }
        return {};

    }

    private generateLastYearWhere(year: number) {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        return ({ data: MoreThan(date) });
    }

    private generateEntireYearWhere(year: number) {
        const initDate = new Date();
        initDate.setFullYear(year, 0, 0);
        const endDate = new Date();
        endDate.setFullYear(+ year + 1, 0, 0);
        return ({ data: Between(initDate, endDate) });
    }

    private generateEntireYearFromDateWhere(year: number, month: number) {
        const initDate = new Date();
        initDate.setFullYear(year, + month - 1, 0);
        const endDate = new Date();
        endDate.setFullYear(+ year + 1, + month - 1, 0);
        return ({ data: Between(initDate, endDate) });
    }
}



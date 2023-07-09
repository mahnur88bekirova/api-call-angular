export interface RequestParams {
    _limit?: number,
    _sort?: string, 
    _start?: number,
    '='?: string,
    _ne?: string,
    _lt?: string,
    _lte?: string,
    _gt?: string,
    _gte?: string,
    _contains?: string,
    _containss?: string,
    _in?: Array<string>,
    _nin?: Array<string>
}
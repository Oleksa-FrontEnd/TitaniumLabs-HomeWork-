class GridView {
    /*
    * properties
    * @param [array] _tableClass css классы оформление
    * @param [array] data - выходные данные
    * @param [array] _attribute управляем что выводить
    * @param [array] _element - куда выводить таблицу
    * @param [array] _header - заголовок таблицы
    * @param [array] _headerClass - css классы заголовка
    */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this.element = 'body';
        this._attribute = [];
    }
    /*
     * Method set header
     */
    set header(header){
        if (typeof header === 'string' && header.trim() != ''){
            this._header = header.trim();
            return true;
        }
        return false;
    }
    /*
     * Method set header
     */
    set headerClass(headerClass){
        if (typeof headerCLass === 'object' ) {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /*
     * Method set element
     */
    set element(element){
        if (document.querySelector(element) ) {
            this._element = document.querySelector(element);
            return true;
        }
        return false;
    }

    /*
    * Method for show GridViewTable
     */
    render() {

    }
}
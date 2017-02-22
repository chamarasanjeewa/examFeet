export class ItemsCarousel {

    private _currentItemNo: number;
    private _items: any[];
    get currentItemNo(): number {
        return this._currentItemNo;
    }
    get items(): any[] {
        return this._items;
    }
    set items(value: any[]) {
        this._items = value;
    }
    get itemsCount(): any {
       return (!this._items) ? null : this.items.length;
    }
    get currentItem(): any {
       return (!this._items || this._items.length < this._currentItemNo) ? null : this.items[this.currentItemNo - 1];
    }

    constructor(items?: any[]) {
        this._currentItemNo = 1;
        this._items = items || null;
    }

    hasNext() {
        return !!this.items && !!this.items.length && this.currentItemNo < this.items.length;
    }

    hasPrevious() {
        return !!this.items && !!this.items.length && this.currentItemNo > 0;
    }

    goToNext() {
        if (!this.hasNext()) { return; }
        this._currentItemNo++;
    }

    goToPrevious() {
        if (!this.hasPrevious()) { return; }
        this._currentItemNo--;
    }
}

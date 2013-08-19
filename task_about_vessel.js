/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
	if(typeof(name)!='string')throw 'invalid type, name must be string';
	this.name=name;

    if(!(position instanceof Array))throw 'invalid type, position must be an array';
    this.position=position;

    if(typeof(capacity)!='number')throw 'invalid type, capacity must be a number';
    this.capacity=capacity;

	this.cargoWeight=0;
	return this;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {

	console.log('Грузовой корабль: '+this.name+', Местоположение: '+this.position+', Груз: '+this.cargoWeight+' из '+this.capacity);
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
   console.log(this.capacity-this.cargoWeight);
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
	console.log(this.cargoWeight);
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {

	if(newPosition instanceof Planet)
	{
		this.position=newPosition.position;
	}
    else{
        if(!(position instanceof Array))throw 'invalid type, position must be an array';
    	this.position=newPosition;
    }
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
	if(typeof(name)!='string')throw 'invalid type, name must be string';
	this.name=name;
	if(!(position instanceof Array))throw 'invalid type, position must be an array';
	this.position=position;
	if(typeof(availableAmountOfCargo)!='number')throw 'invalid type, availableAmountOfCargo must be a number';
	this.availableAmountOfCargo=availableAmountOfCargo;
	return this;
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
	var string_cargo='Доступный груз: '+this.availableAmountOfCargo;
	if((this.availableAmountOfCargo==0)||typeof(this.availableAmountOfCargo)=='undefined')string_cargo='Грузов нет';
	console.log('Планета: '+this.name+', Местоположение: '+this.position+', '+string_cargo);
}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
	return this.availableAmountOfCargo;
}

/**
 * Загружает на корабль заданное количество груза.
 *
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
    vessel.position=this.position;
    if(typeof(cargoWeight)!='number')throw 'invalid type, position must be an array';
    if(vessel.capacity>=cargoWeight)vessel.cargoWeight=cargoWeight;
    else vessel.cargoWeight=vessel.capacity;
}

/**
 * Выгружает с корабля заданное количество груза.
 *
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
    vessel.position=this.position;
    if(typeof(cargoWeight)!='number')throw 'invalid type, position must be an array';
    if(cargoWeight>0){
    vessel.cargoWeight-= (vessel.cargoWeight>=cargoWeight) ? cargoWeight : vessel.cargoWeight;}
}

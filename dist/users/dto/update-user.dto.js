"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = void 0;
const create_user_dto_1 = require("./create-user.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class updateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.createUserDto) {
}
exports.updateUserDto = updateUserDto;
//# sourceMappingURL=update-user.dto.js.map
// Người chăn cừu
// kích thước đàn cừu [1,2,3,4,5,6,7,8,9,10]
// mỗi tháng lượng lông mỗi con tăng 20%
// khi lông cừu lớn >= 50 thì cắt còn 10
// lượng lông cắt được sẽ cho vào kho
// hãy tính lượng tiền thu được sau khi bán lông cừu trong kho sau 2 năm, biết 1 đơn vị lông giá 100k

// 45 => 54 (10) => 14 => 14 + 2.8
// 0      44         44        44
// 24x{
// cừu lớn
//     nếu có: cho vào kho
//     nếu không: bỏ qua
// xem có cần thu hoạch không
// }
// xem trong kho có bao nhiêu => tính tiền
var array = [1,2,3,4,5,6,7,8,9,10];
var kho = 0;
var a = null;
var b = null;
var answer = null;
for(var c = 0; c < 24; c++) {
    for (var i = 0; i < 10; i++){
        a = array[i]*1.2;
        if (a >= 50){
            b = a-50;
            kho += b;
            array[i] = 10;
        }
        else{
            array[i] = a;
        }
    }
}
console.log(answer);
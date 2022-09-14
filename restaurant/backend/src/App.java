import java.sql.*;
public class App {
    public static void main(String[] args)
     {
       
        try
        {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3001/restaurant", "root" , "LiveandLaugh99");
            Statement stmt-con.CreateStatement();
            ResultSet rs-stmt.executeQuery("select fullname from Friends;");
            while(rs.next())
            {
                System.out.println(rs.getString(1));
            }
            con.close();
        }
        catch(Exeption e)
        {
            System.out.println(e);
        }
    }
}

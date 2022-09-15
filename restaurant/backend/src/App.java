import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


public class App {
    public static void main(String[] args)
     {
       
        try
        {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/restaurant", "root" , "LiveandLaugh99");
    
            
            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("select * from Friends;");
           
            while(resultSet.next())
            {
                System.out.println(resultSet.getString("fullname"));
            }
            
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
}
